<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    variant?: 'accent' | 'glass'
    size?: 'sm' | 'md'
  }>(),
  { variant: 'accent', size: 'md' },
)

const base =
  'inline-flex items-center justify-center rounded-full font-semibold transition-transform hover:scale-105'

const variants: Record<string, string> = {
  accent: 'bg-accent text-accent-foreground shadow-xl',
  glass: 'glass-dark text-white',
}

const sizes: Record<string, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-4 text-base',
}
</script>

<template>
  <a :href="href" :class="[base, variants[variant], sizes[size]]">
    <slot />
  </a>
</template>
