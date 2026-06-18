<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import { testimonial } from '~/data/testimonial'
</script>

<template>
  <section class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-4xl px-6 lg:px-8">
      <SectionHeading v-reveal eyebrow="Կարծիքներ" title="Ստեղծենք միասին" />

      <div v-reveal="{ delay: 120 }" class="mt-12">
        <div
          class="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12"
        >
          <Quote class="mx-auto h-12 w-12 text-accent" />
          <p
            class="mt-6 text-pretty font-heading text-xl leading-relaxed text-foreground sm:text-2xl"
          >
            {{ testimonial.quote }}
          </p>
          <div class="mt-8 flex items-center justify-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground"
            >
              {{ testimonial.initial }}
            </div>
            <div class="text-left">
              <p class="font-semibold text-foreground">
                {{ testimonial.author }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ testimonial.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
