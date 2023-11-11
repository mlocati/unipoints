<script setup lang="ts">
import type { PlaneFilterResult, BlockFilterResult } from '@/FilterResult'
import { computed, ref, watch } from 'vue'
import PlaneViewer from './DataViewer/PlaneViewer.vue'
import BlockViewer from './DataViewer/BlockViewer.vue'
import CodepointViewer from './DataViewer/CodepointViewer.vue'

const PAGE_SIZE: number = 1000
let maxItems = ref<number>(PAGE_SIZE)
let showLoadMore: boolean = false

const props = defineProps<{
  filterResults: PlaneFilterResult[]
}>()

watch(props.filterResults, async () => {
  maxItems.value = PAGE_SIZE
})

const displayed = computed<PlaneFilterResult[]>(() => {
  showLoadMore = false
  if (props.filterResults === null) {
    return []
  }
  let remainingRoom = maxItems.value
  const result: PlaneFilterResult[] = []
  props.filterResults.some((plane: PlaneFilterResult) => {
    const planeResult: PlaneFilterResult = {
      plane: plane.plane,
      blocks: []
    }
    plane.blocks.some((block: BlockFilterResult) => {
      const blockResult: BlockFilterResult = {
        block: block.block,
        codepoints: []
      }
      if (block.codepoints.length <= remainingRoom) {
        blockResult.codepoints = block.codepoints
      } else {
        blockResult.codepoints = block.codepoints.slice(0, remainingRoom)
      }
      planeResult.blocks.push(blockResult)
      remainingRoom -= blockResult.codepoints.length
      if (remainingRoom <= 0) {
        showLoadMore = true
        return true
      }
    })
    result.push(planeResult)
    if (remainingRoom <= 0) {
      return true
    }
  })
  return result
})
</script>

<template>
  <div class="container">
    <template v-if="displayed.length === 0">
      <div class="alert alert-info">No results</div>
    </template>
    <template v-else>
      <template v-for="plane in displayed" v-bind:key="plane.plane.id.toString()">
        <PlaneViewer v-bind:plane="plane.plane" />
        <BlockViewer v-bind:block="plane.blocks[0].block" />
        <template
          v-for="(block, blockIndex) in plane.blocks"
          v-bind:key="`${plane.plane.id}@${block.codename}`"
        >
          <BlockViewer v-if="blockIndex !== 0" v-bind:block="block.block" />
          <table class="table table-hover table-sm m-0">
            <colgroup>
              <col width="150" />
              <col />
              <col width="1" />
            </colgroup>

            <tbody>
              <template v-for="codepoint in block.codepoints" v-bind:key="codepoint.name">
                <CodepointViewer v-bind:block="block.block" v-bind:codepoint="codepoint" />
              </template>
            </tbody>
          </table>
        </template>
      </template>
      <div v-if="showLoadMore" class="text-center mt-2">
        <button class="btn btn-secondary" v-on:click.prevent="maxItems += PAGE_SIZE">
          Show more
        </button>
      </div>
    </template>
  </div>
</template>
