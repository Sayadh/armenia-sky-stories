<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import FeatureCard from '~/components/ui/FeatureCard.vue'
import AppButton from '~/components/ui/AppButton.vue'
import { offerings, editingServices, offeringsCopy } from '~/data/offerings'
</script>

<template>
  <section id="offerings" class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        :eyebrow="offeringsCopy.eyebrow"
        :title="offeringsCopy.title"
        :lead="offeringsCopy.subtitle"
      />

      <!-- Main service directions -->
      <div class="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FeatureCard
          v-for="(item, i) in offerings"
          :key="item.title"
          v-reveal="{ delay: i * 70 }"
          class="rounded-3xl p-6 hover:-translate-y-2"
        >
          <div
            class="flex size-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <component :is="item.icon" class="size-6" />
          </div>
          <h3 class="mt-5 font-heading text-lg font-bold text-foreground">
            {{ item.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            {{ item.desc }}
          </p>
        </FeatureCard>
      </div>

      <!-- Editing / post-production subsection -->
      <div class="mt-16 sm:mt-24">
        <h3
          v-reveal
          class="text-center font-heading text-2xl font-bold text-foreground sm:text-3xl"
        >
          {{ offeringsCopy.editingTitle }}
        </h3>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <FeatureCard
            v-for="(item, i) in editingServices"
            :key="item.title"
            v-reveal="{ delay: i * 70 }"
            class="rounded-2xl p-5 hover:-translate-y-1.5"
          >
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent-foreground/80 transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground"
            >
              <component :is="item.icon" class="size-5" />
            </div>
            <h4 class="mt-4 font-heading text-base font-bold text-foreground">
              {{ item.title }}
            </h4>
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
              {{ item.desc }}
            </p>
          </FeatureCard>
        </div>
      </div>

      <!-- Note + CTA -->
      <div v-reveal class="mx-auto mt-12 sm:mt-16 max-w-2xl text-center">
        <p class="leading-relaxed text-muted-foreground text-pretty">
          {{ offeringsCopy.note }}
        </p>
        <AppButton href="#contact" class="mt-7">
          {{ offeringsCopy.cta }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
