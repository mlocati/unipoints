<script setup lang="ts">
import type { Block } from '@/Data'

defineProps<{
  block: Block
}>()
</script>

<template>
  <tr>
    <th colspan="99" class="text-center text-light bg-secondary">
      <h4 class="mb-0">{{ block.name }}</h4>
    </th>
  </tr>
</template>
