<script setup lang="ts">
import type { Block } from '@/Data'

defineProps<{
  block: Block
}>()
</script>

<template>
  <div class="text-center text-light bg-secondary p-2">
    <h4 class="mb-0">{{ block.name }}</h4>
  </div>
</template>
