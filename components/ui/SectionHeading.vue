<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    lead?: string
    align?: 'center' | 'left'
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div :class="['mx-auto max-w-2xl', align === 'center' && 'text-center']">
    <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
      {{ eyebrow }}
    </p>
    <h2
      class="font-heading text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="lead"
      class="mt-4 leading-relaxed text-muted-foreground text-pretty"
    >
      {{ lead }}
    </p>
  </div>
</template>
