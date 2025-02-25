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

const planeBlockSelection = ref<PlaneBlockSelection | null>(null)
const searchText = ref<string>('')
let searchTextTimer: number | null = null
const searchByRegex = ref<boolean>(false)

function extractCodepoints(text: string): number[] {
  if (text.length === 0) {
    return []
  }
  const codepoints: number[] = []
  const surrogatesPair: { high: number, low: number }[] = []
  let match: RegExpMatchArray|null
  if ((match = searchText.value.match(/^&#x([0-9a-f]{1,6});$/i)) !== null) {
    // HTML hex notation: &#x10FFFF;
    codepoints.push(parseInt(match[1], 16))
  } else if ((match = searchText.value.match(/^&#([0-9]{1,7});$/)) !== null) {
    // HTML decimal notation: &#1114111;
    codepoints.push(parseInt(match[1], 10))
  } else if ((match = searchText.value.match(/^["']?\\u([0-9a-f]{4})["']?$/i)) !== null) {
    // JavaScript notation: \uffff
    codepoints.push(parseInt(match[1], 16))
  } else if ((match = searchText.value.match(/^["']?\\x([0-9a-f]{2})["']?$/i)) !== null) {
    // JavaScript notation: \xFF
    codepoints.push(parseInt(match[1], 16))
  } else if ((match = searchText.value.match(/^"?\\u\{([0-9a-f]{1,6})\}"?$/i)) !== null) {
    // PHP notation: \u{10FFFF}
    codepoints.push(parseInt(match[1], 16))
  } else if ((match = searchText.value.match(/^["']?\\u([0-9a-f]{4})\\u([0-9a-f]{4})["']?$/i)) !== null) {
    // JavaScript notation: \ud83d\ude3c
    surrogatesPair.push({
      high: parseInt(match[1], 16),
      low: parseInt(match[2], 16)
    })
  } else {
    if ((match = searchText.value.match(/^([0-9]{1,7})$/)) !== null) {
      // Codepoint in decimal notation: 1114111
      codepoints.push(parseInt(match[1], 10))
    }
    if ((match = searchText.value.match(/^([0-9a-f]{1,6})$/i)) !== null) {
      // Codepoint in hex notation: 10FFFF
      codepoints.push(parseInt(match[1], 16))
    }
  }
  surrogatesPair.forEach((surrogates) => {
    if (surrogates.high >= 0xD800 && surrogates.high <= 0xDBFF && surrogates.low >= 0xDC00 && surrogates.low <= 0xDFFF) {
      codepoints.push(0x10000 + ((surrogates.high - 0xD800) << 10) + (surrogates.low - 0xDC00))
    }
  });
  return codepoints
    .filter((codepoint) => codepoint >= 0 && codepoint <= 0x10FFFF)
    .filter((value, index, self) => self.indexOf(value) === index)
  ;
}

const searchRegex = computed<RegExp | Error>(() => {
  if (searchText.value.length === 0) {
    return new Error('Please specify the regular expression')
  }
  try {
    return new RegExp(searchText.value, 'i')
  } catch (e) {
    if (e instanceof Error) {
      return e
    }
    return new Error(e?.toString() || '?')
  }
})

function clearSearchTextTimer(): void {
  if (searchTextTimer !== null) {
    clearTimeout(searchTextTimer)
    searchTextTimer = null
  }
}

const emit = defineEmits<{
  (e: 'change', filtered: PlaneFilterResult[] | Error): void
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
  const regexp: RegExp | Error = searchRegex.value
  if (searchByRegex.value && searchRegex.value instanceof Error) {
    emit('change', searchRegex.value)
    return
  }
  const result: PlaneFilterResult[] = []
  if (!searchByRegex.value) {
    const searchByCodepoints = searchByRegex.value ? [] : extractCodepoints(searchText.value)
    if (searchByCodepoints.length > 0) {
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
            const codepoints = block.codepoints.filter((cp) => searchByCodepoints.includes(cp.id));
            if (codepoints.length === 0) {
              return
            }
            blocks.push({
              block,
              codepoints,
            })
          });
          if (blocks.length === 0) {
            return
          }
          result.push({
            plane,
            blocks
          });
        });
      }
      if (result.length > 0) {
        emit('change', result)
        return
      }
    }
  }
  const ucWords = searchText.value
    .split(/\s+/)
    .filter((s) => s.length > 0)
    .map((word) => word.toUpperCase())
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
          if (regexp instanceof Error) {
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
        v-bind:placeholder="searchByRegex ? 'Filter by regular expression' : 'Filter by name or codepoint'"
        v-bind:class="
          searchByRegex
            ? searchRegex instanceof RegExp
              ? 'font-monospace is-valid'
              : 'font-monospace is-invalid'
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
