<script setup lang="ts">
import type { Block, Codepoint } from '@/Data'
import { computed, ref } from 'vue'
import CopiableText from '../CopiableText.vue'

const props = defineProps<{
  block: Block
  codepoint: Codepoint
}>()

const infoDisplayed = ref<boolean>(false)

const phpString = computed<string>(() => `"\\u{${props.codepoint.id.toString(16).toUpperCase()}}"`)
const javascriptString = computed<string>(() => {
  if (props.codepoint.id <= 0xffff) {
    return `'\\u${props.codepoint.id.toString(16).padStart(4, '0')}'`
  }
  return `'\\u${props.codepoint.char
    .charCodeAt(0)
    .toString(16)
    .padStart(4, '0')}\\u${props.codepoint.char.charCodeAt(1).toString(16).padStart(4, '0')}'`
})
const htmlString = computed<string>(() => `&#x${props.codepoint.id.toString(16).toUpperCase()};`)
</script>

<template>
  <tr v-on:click="infoDisplayed = !infoDisplayed">
    <td class="char">
      <pre class="mb-0">{{ codepoint.char }}</pre>
    </td>
    <td>
      <h5 class="m-0">{{ codepoint.name }}</h5>
    </td>
    <td>
      <button class="btn" v-bind:class="infoDisplayed ? 'btn-primary' : 'btn-outline-primary'">
        <font-awesome-icon icon="fa-solid fa-circle-info" />
      </button>
    </td>
  </tr>
  <tr v-if="infoDisplayed" class="details">
    <td colspan="99">
      <div class="container mx-4">
        <div class="row">
          <div class="col">
            <dl>
              <dt>PHP</dt>
              <dd><CopiableText v-bind:code="true" v-bind:text="phpString" /></dd>
              <dt>JavaScript</dt>
              <dd><CopiableText v-bind:code="true" v-bind:text="javascriptString" /></dd>
              <dt>HTML</dt>
              <dd><CopiableText v-bind:code="true" v-bind:text="htmlString" /></dd>
              <dt>Unipoints</dt>
              <dd>
                <CopiableText
                  v-bind:text="`\\MLUnipoints\\Codepoint::${codepoint.codename}`"
                  v-bind:display-text="`Codepoint::${codepoint.codename}`"
                  v-bind:code="true"
                />
              </dd>
              <dt>Unipoints (less memory)</dt>
              <dd>
                <CopiableText
                  v-bind:text="`\\MLUnipoints\\Codepoint\\${block.codename}::${codepoint.codename}`"
                  v-bind:display-text="`Codepoint\\${block.codename}::${codepoint.codename}`"
                  v-bind:code="true"
                />
              </dd>
            </dl>
          </div>
          <div class="col">
            <div v-if="codepoint.unicode1Name !== undefined">
              <span class="badge rounded-pill text-bg-primary me-1">Old Unicode name</span>
              <code>{{ codepoint.unicode1Name }}</code>
            </div>
            <template v-if="codepoint.formalAliases !== undefined">
              <div v-for="n in codepoint.formalAliases" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Formal alias</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.informativeAliases !== undefined">
              <div v-for="n in codepoint.informativeAliases" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Informative alias</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.correctedNames !== undefined">
              <div v-for="n in codepoint.correctedNames" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Corrected name</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.controlNames !== undefined">
              <div v-for="n in codepoint.controlNames" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Control name</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.alternateNames !== undefined">
              <div v-for="n in codepoint.alternateNames" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Alternate name</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.figments !== undefined">
              <div v-for="n in codepoint.figments" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Figment</span>
                <code>{{ n }}</code>
              </div>
            </template>
            <template v-if="codepoint.abbreviations !== undefined">
              <div v-for="n in codepoint.abbreviations" v-bind:key="n">
                <span class="badge rounded-pill text-bg-primary me-1">Abbreviation</span>
                <code>{{ n }}</code>
              </div>
            </template>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<style scoped>
td {
  vertical-align: middle;
}
td.char > * {
  text-align: center;
  font-size: 200%;
}
tr.details>td {
  background-color: #fafafa;
}
</style>
