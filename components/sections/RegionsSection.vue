<script setup lang="ts">
import { ref } from 'vue'
import { MapPin } from 'lucide-vue-next'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import { regions } from '~/data/regions'

const active = ref(regions[0])
</script>

<template>
  <section id="map" class="relative py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        eyebrow="Հայաստանը վերևից"
        title="Բացահայտեք Հայաստանը օդից"
        lead="Բացահայտեք Հայաստանի գեղեցկությունը օդից՝ նոր տեսանկյունից։ Ընտրեք վայր՝ դիտելու համար։"
      />

      <div class="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div
          v-reveal
          class="flex flex-wrap content-start gap-3 lg:flex-col"
        >
          <button
            v-for="region in regions"
            :key="region.id"
            type="button"
            class="flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-semibold transition-all"
            :class="
              active.id === region.id
                ? 'border-transparent bg-primary text-primary-foreground shadow-lg'
                : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted'
            "
            @click="active = region"
          >
            <MapPin class="h-4 w-4 shrink-0" />
            {{ region.name }}
          </button>
        </div>

        <div v-reveal="{ delay: 120 }">
          <div
            class="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              v-for="region in regions"
              :key="region.id"
              :src="region.image"
              :alt="region.name"
              class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
              :class="active.id === region.id ? 'opacity-100' : 'opacity-0'"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />
            <div class="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3
                class="font-heading text-2xl font-bold text-white sm:text-3xl"
              >
                {{ active.name }}
              </h3>
              <p class="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                {{ active.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
