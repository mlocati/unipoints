<script setup lang="ts">
import type { Plane } from '@/Data'

defineProps<{
  plane: Plane
}>()
</script>

<template>
  <tr>
    <th colspan="99" class="text-center text-light bg-dark">
      <h3 class="mb-0">
        Plane {{ plane.id }}
        <template v-if="plane.name !== ''">
          (<template v-if="plane.shortName !== ''">{{ plane.shortName }} - </template
          >{{ plane.name }})
        </template>
      </h3>
    </th>
  </tr>
</template>
