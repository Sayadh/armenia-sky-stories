<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import AppButton from '~/components/ui/AppButton.vue'
import { site } from '~/data/site'
import { ctaLabel } from '~/data/navigation'
</script>

<template>
  <section
    id="hero"
    class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0">
      <img
        src="/images/hero-bright.png"
        alt="Հայաստանի լեռնային բնապատկերը օդից"
        class="h-full w-full animate-slow-zoom object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"
      />
    </div>

    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <p
        class="glass-dark mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-medium text-white"
      >
        {{ site.name }}
      </p>
      <h1
        class="font-heading text-4xl font-bold leading-tight text-white text-balance drop-shadow-lg sm:text-6xl md:text-7xl"
      >
        Հայաստանը՝ նոր տեսանկյունից
      </h1>
      <p
        class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 text-pretty sm:text-lg"
      >
        {{ site.seo.description }}
      </p>
      <div
        class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <AppButton href="#contact" class="w-full sm:w-auto">
          {{ ctaLabel }}
        </AppButton>
        <AppButton href="#map" variant="glass" class="w-full sm:w-auto">
          Դիտել աշխատանքները
        </AppButton>
      </div>
    </div>

    <a
      href="#about"
      aria-label="Ոլորել ներքև"
      class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/90"
    >
      <ChevronDown class="h-8 w-8 animate-scroll-bob" />
    </a>
  </section>
</template>
