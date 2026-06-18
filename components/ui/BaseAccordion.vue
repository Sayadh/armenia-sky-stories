<script setup lang="ts">
import { provide, ref } from 'vue'

const props = withDefaults(defineProps<{ collapsible?: boolean }>(), {
  collapsible: true,
})

export interface AccordionContext {
  openValue: Ref<string | null>
  toggle: (value: string) => void
}

const openValue = ref<string | null>(null)

function toggle(value: string) {
  if (openValue.value === value) {
    openValue.value = props.collapsible ? null : value
  } else {
    openValue.value = value
  }
}

provide<AccordionContext>('accordion', { openValue, toggle })
</script>

<template>
  <div class="flex w-full flex-col">
    <slot />
  </div>
</template>
