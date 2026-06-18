<script setup lang="ts">
import SectionHeading from '~/components/ui/SectionHeading.vue'
import BaseAccordion from '~/components/ui/BaseAccordion.vue'
import BaseAccordionItem from '~/components/ui/BaseAccordionItem.vue'
import { faqs } from '~/data/faqs'
</script>

<template>
  <section id="faq" class="relative py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-3xl px-6 lg:px-8">
      <SectionHeading v-reveal eyebrow="Հարցեր" title="Հաճախ տրվող հարցեր" />

      <div v-reveal="{ delay: 120 }" class="mt-12">
        <BaseAccordion>
          <BaseAccordionItem
            v-for="faq in faqs"
            :key="faq.q"
            :value="faq.q"
          >
            <template #trigger>{{ faq.q }}</template>
            <p>{{ faq.a }}</p>
          </BaseAccordionItem>
        </BaseAccordion>
      </div>
    </div>
  </section>
</template>
