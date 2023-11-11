<script setup lang="ts">
import type { Data, Codepoint } from '@/Data'
import type { PlaneFilterResult, BlockFilterResult } from '@/FilterResult'
import { onMounted, ref, watch } from 'vue'

export interface PlaneBlockSelection {
  plane: number
  block?: string
}

const props = defineProps<{
  unipointsData: Data | null
}>()

let planeBlockSelection = ref<PlaneBlockSelection | null>(null)
let searchText = ref<string>('')
let searchTextTimer: number | null = null

function clearSearchTextTimer(): void {
  if (searchTextTimer !== null) {
    clearTimeout(searchTextTimer)
    searchTextTimer = null
  }
}

const emit = defineEmits<{
  (e: 'change', filtered: PlaneFilterResult[]): void
}>()

function codepointSatisfyWords(codepoint: Codepoint, ucWords: string[]): boolean {
  return !ucWords.some((ucWord) => {
    if (!codepoint.name.toUpperCase().includes(ucWord)) {
      return true
    }
  })
}

watch(planeBlockSelection, async () => {
  updateSelectedCodepoints()
})
watch(searchText, async () => {
  clearSearchTextTimer()
  searchTextTimer = setTimeout(() => updateSelectedCodepoints(), 300)
})

function updateSelectedCodepoints() {
  clearSearchTextTimer()
  const ucWords = searchText.value
    .split(/\s+/)
    .filter((s) => s.length > 0)
    .map((word) => word.toUpperCase())
  const result: PlaneFilterResult[] = []
  if (props.unipointsData !== null) {
    props.unipointsData.planes.forEach((plane) => {
      if (planeBlockSelection.value !== null && planeBlockSelection.value.plane !== plane.id) {
        return
      }
      const blocks: BlockFilterResult[] = []
      plane.blocks.forEach((block) => {
        if (
          planeBlockSelection.value !== null &&
          planeBlockSelection.value.block !== undefined &&
          planeBlockSelection.value.block !== block.codename
        ) {
          return
        }
        let codepoints: Codepoint[]
        if (ucWords.length === 0) {
          codepoints = block.codepoints
        } else {
          codepoints = block.codepoints.filter((codepoint) =>
            codepointSatisfyWords(codepoint, ucWords)
          )
        }
        if (codepoints.length === 0) {
          return
        }
        blocks.push({
          block,
          codepoints
        })
      })
      if (blocks.length === 0) {
        return
      }
      result.push({
        plane,
        blocks
      })
    })
  }
  emit('change', result)
}

onMounted(() => updateSelectedCodepoints())
</script>

<template>
  <div class="container">
    <div class="input-group mb-3">
      <span class="input-group-text">Block</span>
      <select class="form-control" v-if="unipointsData !== null" v-model="planeBlockSelection">
        <option v-bind:value="null">any</option>
        <template v-for="plane in unipointsData.planes" v-bind:key="plane.id.toString()">
          <optgroup
            v-bind:label="
              `Plane ${plane.id}` +
              (plane.name !== '' ? ` (${plane.name})` : plane.unassigned ? ' (unassigned)' : '')
            "
          >
            <template v-if="plane.blocks.length === 0">
              <option disabled>No blocks in this plane</option>
            </template>
            <template v-else>
              <template v-for="block in plane.blocks" v-bind:key="`${plane.id}-${block.codename}`">
                <option v-bind:value="{ plane: plane.id, block: block.codename }">
                  {{ block.name }}
                </option>
              </template>
            </template>
          </optgroup>
        </template>
      </select>
      <span class="input-group-text">Search</span>
      <input
        type="search"
        class="form-control"
        v-model.trim="searchText"
        placeholder="Filter by name"
      />
    </div>
  </div>
</template>
