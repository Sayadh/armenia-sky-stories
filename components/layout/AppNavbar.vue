<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Plane } from 'lucide-vue-next'
import AppButton from '~/components/ui/AppButton.vue'
import { navLinks, ctaLabel } from '~/data/navigation'
import { site } from '~/data/site'
import { useScrolled } from '~/composables/useScrolled'

const { scrolled } = useScrolled(40)
const open = ref(false)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass shadow-sm' : 'bg-transparent'"
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
    >
      <a
        href="#hero"
        class="flex items-center gap-2 font-heading text-lg font-bold tracking-tight transition-colors"
        :class="scrolled ? 'text-foreground' : 'text-white'"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
          :class="
            scrolled
              ? 'bg-primary text-primary-foreground'
              : 'glass-dark text-white'
          "
        >
          <Plane class="h-4 w-4" />
        </span>
        {{ site.name }}
      </a>

      <div class="hidden items-center gap-6 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium transition-colors hover:text-primary"
          :class="scrolled ? 'text-muted-foreground' : 'text-white/90'"
        >
          {{ link.label }}
        </a>
        <AppButton href="#contact" size="sm">{{ ctaLabel }}</AppButton>
      </div>

      <button
        type="button"
        aria-label="Բացել ընտրացանկը"
        class="lg:hidden"
        :class="scrolled || open ? 'text-foreground' : 'text-white'"
        @click="open = !open"
      >
        <X v-if="open" class="h-6 w-6" />
        <Menu v-else class="h-6 w-6" />
      </button>
    </nav>

    <div v-if="open" class="glass border-t border-border lg:hidden">
      <div class="flex flex-col gap-1 px-5 py-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <AppButton
          href="#contact"
          size="sm"
          class="mt-2 w-full"
          @click="open = false"
        >
          {{ ctaLabel }}
        </AppButton>
      </div>
    </div>
  </header>
</template>
