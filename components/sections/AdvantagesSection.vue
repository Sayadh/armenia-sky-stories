<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import { advantages } from '~/data/advantages'
</script>

<template>
  <section class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        eyebrow="Առավելություններ"
        title="Ինչու՞ ընտրել ինձ"
      />

      <div class="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(reason, i) in advantages"
          :key="reason.title"
          v-reveal="{ delay: i * 90 }"
        >
          <div
            class="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary"
            >
              <component :is="reason.icon" class="size-6" />
            </div>
            <div>
              <h3 class="font-heading text-lg font-bold text-foreground">
                {{ reason.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
                {{ reason.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
