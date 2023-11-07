<script setup lang="ts">
defineProps<{
  unicodeVersion: string
}>()
</script>

<template>
  <header
    class="container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 text-bg-secondary"
  >
    <h1 class="d-flex fs-4 mb-0 me-md-auto">Codepoints from Unicode v{{ unicodeVersion }}</h1>
    <a class="fs-4 text-decoration-none text-light" href="https://github.com/mlocati/unipoints"
      ><font-awesome-icon v-bind:icon="['fab', 'github']"
    /></a>
  </header>
</template>
