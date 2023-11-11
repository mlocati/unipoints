<script setup lang="ts">
import type { Data, Codepoint } from '@/Data'
import type { PlaneFilterResult, BlockFilterResult } from '@/FilterResult'
import { computed, onMounted, ref, watch } from 'vue'
import { matchWords, matchRegexp } from '@/CodepointTextSearch'

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
let searchByRegex = ref<boolean>(false)

const searchRegex = computed<RegExp | null>(() => {
  if (searchText.value.length === 0) {
    return null
  }
  try {
    return new RegExp(searchText.value, 'i')
  } catch {
    return null
  }
})

function clearSearchTextTimer(): void {
  if (searchTextTimer !== null) {
    clearTimeout(searchTextTimer)
    searchTextTimer = null
  }
}

const emit = defineEmits<{
  (e: 'change', filtered: PlaneFilterResult[]): void
}>()

watch(planeBlockSelection, async () => {
  updateSelectedCodepoints()
})
watch(searchText, async () => {
  clearSearchTextTimer()
  searchTextTimer = setTimeout(() => updateSelectedCodepoints(), 300)
})
watch(searchByRegex, async () => {
  updateSelectedCodepoints()
})

function updateSelectedCodepoints() {
  clearSearchTextTimer()
  const ucWords = searchText.value
    .split(/\s+/)
    .filter((s) => s.length > 0)
    .map((word) => word.toUpperCase())
  const result: PlaneFilterResult[] = []
  const regexp: RegExp | null = searchRegex.value
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
        if (searchByRegex.value) {
          if (regexp === null) {
            return
          }
          codepoints = block.codepoints.filter((codepoint) => matchRegexp(codepoint, regexp))
        } else {
          if (ucWords.length === 0) {
            codepoints = block.codepoints
          } else {
            codepoints = block.codepoints.filter((codepoint) => matchWords(codepoint, ucWords))
          }
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
        v-bind:placeholder="searchByRegex ? 'Filter by regular expression' : 'Filter by name'"
        v-bind:class="
          searchByRegex
            ? searchRegex === null
              ? 'font-monospace is-invalid'
              : 'font-monospace is-valid'
            : ''
        "
      />
      <div class="input-group-text">
        <label>
          <input type="checkbox" class="form-check-input me-" v-model="searchByRegex" />
          rx
        </label>
      </div>
    </div>
  </div>
</template>
