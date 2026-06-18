<script setup lang="ts">
import { computed, inject } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import type { AccordionContext } from './BaseAccordion.vue'

const props = defineProps<{ value: string }>()

const accordion = inject<AccordionContext>('accordion')
const isOpen = computed(() => accordion?.openValue.value === props.value)
</script>

<template>
  <div class="mb-3 rounded-2xl border border-border bg-card px-5">
    <h3>
      <button
        type="button"
        :aria-expanded="isOpen"
        class="flex w-full items-center justify-between gap-4 py-4 text-left font-heading text-lg font-semibold transition-colors"
        :class="isOpen ? 'text-primary' : 'text-foreground hover:text-primary'"
        @click="accordion?.toggle(value)"
      >
        <slot name="trigger" />
        <ChevronDown
          class="size-5 shrink-0 text-muted-foreground transition-transform duration-300"
          :class="isOpen && 'rotate-180 text-primary'"
        />
      </button>
    </h3>
    <div
      class="grid transition-all duration-300 ease-out"
      :class="isOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div class="text-base leading-relaxed text-muted-foreground">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
