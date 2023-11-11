<script setup lang="ts">
import type { Plane } from '@/Data'

defineProps<{
  plane: Plane
}>()
</script>

<template>
  <div class="text-center text-light bg-dark p-2">
    <h3 class="mb-0">
      Plane {{ plane.id }}
      <template v-if="plane.name !== ''">
        (<template v-if="plane.shortName !== ''">{{ plane.shortName }} - </template
        >{{ plane.name }})
      </template>
    </h3>
  </div>
</template>
