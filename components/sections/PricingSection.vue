<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import FeatureCard from '~/components/ui/FeatureCard.vue'
import AppButton from '~/components/ui/AppButton.vue'
import { pricingPlans, pricingCopy } from '~/data/pricing'
</script>

<template>
  <section id="pricing" class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        :eyebrow="pricingCopy.eyebrow"
        :title="pricingCopy.title"
        :lead="pricingCopy.subtitle"
      />

      <!-- Pricing cards -->
      <div class="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard
          v-for="(plan, i) in pricingPlans"
          :key="plan.title"
          v-reveal="{ delay: i * 80 }"
          class="rounded-3xl p-6 hover:-translate-y-2"
        >
          <div
            class="flex size-12 items-center justify-center rounded-2xl bg-secondary/15 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <component :is="plan.icon" class="size-6" />
          </div>
          <h3 class="mt-5 font-heading text-lg font-bold text-foreground">
            {{ plan.title }}
          </h3>
          <p class="mt-3 font-heading text-2xl font-bold text-primary">
            {{ plan.price }}
          </p>
          <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
            {{ plan.desc }}
          </p>
        </FeatureCard>
      </div>

      <!-- Note -->
      <p
        v-reveal
        class="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground text-pretty"
      >
        {{ pricingCopy.note }}
      </p>

      <!-- Highlighted custom-offer card -->
      <div v-reveal class="mt-12">
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary p-8 text-center shadow-xl sm:p-12"
        >
          <div
            class="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl"
          />
          <div
            class="pointer-events-none absolute -bottom-12 -left-8 size-44 rounded-full bg-accent/20 blur-2xl"
          />
          <div class="relative">
            <h3 class="font-heading text-2xl font-bold text-white sm:text-3xl">
              {{ pricingCopy.customTitle }}
            </h3>
            <p
              class="mx-auto mt-4 max-w-xl leading-relaxed text-white/90 text-pretty"
            >
              {{ pricingCopy.customText }}
            </p>
            <AppButton href="#contact" class="mt-8">
              {{ pricingCopy.customCta }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
