<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import { processSteps } from '~/data/process'
</script>

<template>
  <section id="process" class="relative py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <SectionHeading
        v-reveal
        eyebrow="Աշխատանքի ընթացքը"
        title="Ինչպե՞ս է իրականացվում պատվերը"
      />

      <div class="relative mt-12 sm:mt-16">
        <div
          class="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-primary via-secondary to-accent sm:block"
        />
        <div class="flex flex-col gap-8">
          <div
            v-for="(step, i) in processSteps"
            :key="step.n"
            v-reveal="{ delay: i * 90 }"
          >
            <div class="flex items-start gap-6">
              <div
                class="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-lg"
              >
                {{ step.n }}
              </div>
              <div
                class="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 class="font-heading text-xl font-bold text-foreground">
                  {{ step.title }}
                </h3>
                <p class="mt-2 leading-relaxed text-muted-foreground">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
