<script setup lang="ts">
import type { Block, Codepoint } from '@/Data'
import { computed } from 'vue'
import CopiableText from '../CopiableText.vue'

const props = defineProps<{
  block: Block
  codepoint: Codepoint
}>()

const idHex = computed<string>(() => props.codepoint.id.toString(16).toUpperCase())
</script>

<template>
  <tr>
    <td>
      <CopiableText
        v-bind:text="`&quot;\\u{${idHex}}&quot;`"
        v-bind:display-text="`\\u{${idHex}}`"
        v-bind:code="true"
      />
    </td>
    <td class="char">
      <pre class="mb-0">{{ codepoint.char }}</pre>
    </td>
    <td>
      <code>{{ codepoint.name }}</code>
    </td>
    <td>
      <CopiableText
        v-bind:text="`\\MLUnipoints\\Codepoint::${codepoint.codename}`"
        v-bind:display-text="`Codepoint::${codepoint.codename}`"
        v-bind:code="true"
      /><br />
      <CopiableText
        v-bind:text="`\\MLUnipoints\\Codepoint\\${block.codename}::${codepoint.codename}`"
        v-bind:display-text="`Codepoint\\${block.codename}::${codepoint.codename}`"
        v-bind:code="true"
      /><br />
    </td>
  </tr>
</template>

<style scoped>
td {
  vertical-align: middle;
}
td.char > * {
  font-size: 200%;
}
</style>
