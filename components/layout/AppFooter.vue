<script setup lang="ts">
import { Plane } from 'lucide-vue-next'
import { site } from '~/data/site'
import { socialLinks } from '~/data/contact'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-muted/40">
    <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div class="flex flex-col items-center gap-6 text-center">
        <a
          href="#hero"
          class="flex items-center gap-2 font-heading text-xl font-bold text-foreground"
        >
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Plane class="h-4 w-4" />
          </span>
          {{ site.name }}
        </a>
        <p class="max-w-md text-sm text-muted-foreground">
          {{ site.tagline }}
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            <component :is="social.icon" class="h-5 w-5" />
          </a>
        </div>
        <p class="text-xs text-muted-foreground">
          &copy; {{ year }} {{ site.name }}։ Բոլոր իրավունքները պաշտպանված են։
        </p>
      </div>
    </div>
  </footer>
</template>
