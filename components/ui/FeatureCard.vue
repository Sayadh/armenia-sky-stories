<script setup lang="ts">
// Premium card shell: soft glass surface that lifts on hover and reveals a
// subtle brand gradient. Padding / radius / lift are passed via the class
// attribute by the caller, e.g. class="rounded-3xl p-6 hover:-translate-y-2".
</script>

<template>
  <div
    class="group relative h-full overflow-hidden border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    />
    <div class="relative flex h-full flex-col">
      <slot />
    </div>
  </div>
</template>
