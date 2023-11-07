<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  text: string
  displayText: string | undefined
  code: boolean | null
}>()

const textToDisplay = computed<string>(() => props.displayText ?? props.text)

const SUCCESS_CLASS: string = 'bg-success'
const FAILURE_CLASS: string = 'bg-danger'

const link = ref<HTMLAnchorElement | null>(null)

let linkTimer: number | null = null

function clearTimer() {
  if (link.value === null || linkTimer === null) {
    return
  }
  clearTimeout(linkTimer)
  linkTimer = null
  link.value.classList.remove(SUCCESS_CLASS, FAILURE_CLASS)
}

function setTimer(success: boolean): void {
  clearTimer()
  if (link.value === null) {
    return
  }
  link.value.classList.add(success ? SUCCESS_CLASS : FAILURE_CLASS)
  linkTimer = setTimeout(() => clearTimer(), 500)
}

type CopyPromise = () => Promise<void>

let copyPromise: CopyPromise
if (navigator?.clipboard?.writeText) {
  copyPromise = () => navigator.clipboard.writeText(props.text)
} else {
  copyPromise = () =>
    new Promise<void>((resolve, reject) => {
      const textarea = document.createElement('textarea')
      textarea.style.width = '1px'
      textarea.style.height = '1px'
      textarea.style.overflow = 'hidden'
      textarea.style.top = '0'
      textarea.style.left = '0'
      textarea.style.position = 'fixed'
      textarea.value = props.text
      document.body.appendChild(textarea)
      try {
        textarea.focus()
        textarea.select()
        if (document.execCommand('copy')) {
          resolve()
        } else {
          reject(new Error('Copy command failed'))
        }
      } catch (e) {
        reject(e)
      } finally {
        document.body.removeChild(textarea)
      }
    })
}

function copyText(e: Event) {
  e.preventDefault()
  clearTimer()
  copyPromise()
    .then(() => {
      setTimer(true)
    })
    .catch((reason) => {
      console.error(reason)
      setTimer(false)
    })
}
</script>

<template>
  <span class="copiable">
    <code v-if="code">{{ textToDisplay }}</code>
    <template v-else>{{ textToDisplay }}</template>
    <a href="#" title="Copy to clipboard" ref="link" v-on:click="copyText"
      ><font-awesome-icon v-bind:icon="['far', 'copy']" /></a
  ></span>
</template>

<style scoped lang="scss">
.copiable {
  white-space: nowrap;
}
a {
  display: inline-block;
  margin-left: 2px;
  padding: 2px;
  transition: all 0.2s ease-in-out;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
}
</style>
