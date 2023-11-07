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

getData()
  .then((data: Data) => {
    unipointsData.value = data
  })
  .catch((error) => {
    loadError.value = error
  })
</script>

<template>
  <template v-if="unipointsData === null">
    <main class="container-fluid">
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
      <DataFilter v-bind:unipoints-data="unipointsData" v-on:change="filterResults = $event" />
      <DataViewer v-if="filterResults !== null" v-bind:filterResults="filterResults" />
    </main>
  </template>
</template>
