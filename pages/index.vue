<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import OfferingsSection from '~/components/sections/OfferingsSection.vue'
import RegionsSection from '~/components/sections/RegionsSection.vue'
import AdvantagesSection from '~/components/sections/AdvantagesSection.vue'
import ProcessSection from '~/components/sections/ProcessSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import FaqSection from '~/components/sections/FaqSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
</script>

<template>
  <div>
    <AppNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <RegionsSection />
      <AdvantagesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <PricingSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
