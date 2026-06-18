<script setup lang="ts">
import { ref } from 'vue'
import { Play, X } from 'lucide-vue-next'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import { portfolioItems } from '~/data/portfolio'
import type { PortfolioItem } from '~/types/content'

const active = ref<PortfolioItem | null>(null)
</script>

<template>
  <section id="portfolio" class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        eyebrow="Պորտֆոլիո"
        title="Իմ աշխատանքները"
        lead="Յուրաքանչյուր կադր պատմում է իր պատմությունը։ Սեղմեք ցանկացած աշխատանքի վրա՝ դիտելու համար։"
      />

      <div
        class="mt-12 sm:mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="(item, i) in portfolioItems"
          :key="item.title"
          v-reveal="{ delay: i * 80 }"
          :class="item.span"
        >
          <button
            type="button"
            class="group relative h-full w-full overflow-hidden rounded-3xl shadow-sm"
            @click="active = item"
          >
            <img
              :src="item.src"
              :alt="`${item.title}, ${item.location}`"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
            />
            <span
              v-if="item.type === 'video'"
              class="glass-dark absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white transition-transform group-hover:scale-110"
            >
              <Play class="size-5 translate-x-0.5" />
            </span>
            <div class="absolute inset-x-0 bottom-0 p-5 text-left">
              <p class="font-heading text-lg font-bold text-white">
                {{ item.title }}
              </p>
              <p
                class="text-xs font-medium uppercase tracking-wider text-accent"
              >
                {{ item.location }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="active"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      :aria-label="active.title"
      @click="active = null"
    >
      <button
        type="button"
        aria-label="Փակել"
        class="glass absolute right-6 top-6 flex size-10 items-center justify-center rounded-full text-foreground"
        @click="active = null"
      >
        <X class="size-5" />
      </button>
      <div
        class="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-card shadow-2xl"
        @click.stop
      >
        <div class="relative aspect-video">
          <img
            :src="active.src"
            :alt="`${active.title}, ${active.location}`"
            class="h-full w-full object-cover"
          />
          <span
            v-if="active.type === 'video'"
            class="glass-dark absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white"
          >
            <Play class="size-7 translate-x-1" />
          </span>
        </div>
        <div class="flex items-center justify-between px-6 py-4">
          <div>
            <p class="font-heading text-xl font-bold text-foreground">
              {{ active.title }}
            </p>
            <p
              class="text-xs font-medium uppercase tracking-wider text-secondary"
            >
              {{ active.location }}
            </p>
          </div>
          <span
            class="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            {{ active.type === 'video' ? 'Տեսանյութ' : 'Լուսանկար' }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
