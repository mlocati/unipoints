<script setup lang="ts">
import type { Data } from '@/Data'
import type { PlaneFilterResult } from '@/FilterResult'
import { ref } from 'vue'
import { getData } from '@/Data'
import HeaderElement from '@/components/HeaderElement.vue'
import DataFilter from '@/components/DataFilter.vue'
import DataViewer from '@/components/DataViewer.vue'

const unipointsData = ref<Data | null>(null)
const loadError = ref(null)
const filterResults = ref<PlaneFilterResult[] | null>(null)
const filterResultsError = ref<Error | null>(null)

getData()
  .then((data: Data) => {
    unipointsData.value = data
  })
  .catch((error) => {
    loadError.value = error
  })

function setFilterResult(result: PlaneFilterResult[] | Error) {
  if (result instanceof Error) {
    filterResults.value = null
    filterResultsError.value = result
  } else {
    filterResults.value = result
    filterResultsError.value = null
  }
}
</script>

<template>
  <template v-if="unipointsData === null">
    <main class="container">
      <div v-if="loadError !== null" class="alert alert-danger mt-5 text-center">
        {{ loadError }}
      </div>
      <div v-else class="alert alert-info mt-5 text-center fs-4">
        Loading...<br />
        <font-awesome-icon icon="fa-solid fa-spinner" spin />
      </div>
    </main>
  </template>
  <template v-else>
    <HeaderElement v-bind:unicode-version="unipointsData.unicodeVersion" />
    <main v-if="unipointsData">
      <DataFilter v-bind:unipoints-data="unipointsData" v-on:change="setFilterResult($event)" />
      <div v-if="filterResultsError !== null" class="container alert alert-danger">
        {{ filterResultsError.message }}
      </div>
      <DataViewer v-else-if="filterResults !== null" v-bind:filterResults="filterResults" />
    </main>
  </template>
</template>
