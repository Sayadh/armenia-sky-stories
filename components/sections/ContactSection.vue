<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Send, Check, Loader2 } from 'lucide-vue-next'
import AppButton from '~/components/ui/AppButton.vue'
import { contactChannels, contactCopy } from '~/data/contact'

const form = reactive({ name: '', phone: '', message: '' })
const sent = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (loading.value) return
  loading.value = true
  error.value = ''

  try {
    await $fetch('/api/contact', { method: 'POST', body: { ...form } })
    sent.value = true
    form.name = ''
    form.phone = ''
    form.message = ''
  } catch (e: unknown) {
    const err = e as { statusMessage?: string; data?: { statusMessage?: string } }
    error.value =
      err?.data?.statusMessage ??
      err?.statusMessage ??
      'Չհաջողվեց ուղարկել։ Փորձեք կրկին։'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="relative">
    <!-- Final CTA with sunset background -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/images/cta-sunset.png"
          alt=""
          aria-hidden="true"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60"
        />
      </div>
      <div
        class="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28 lg:py-36"
      >
        <div v-reveal>
          <h2
            class="font-heading text-3xl font-bold leading-tight text-white text-balance drop-shadow-lg sm:text-5xl lg:text-6xl"
          >
            {{ contactCopy.ctaTitle }}
          </h2>
          <p
            class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 text-pretty"
          >
            {{ contactCopy.ctaLead }}
          </p>
          <div
            class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <AppButton href="#contact-form" class="w-full sm:w-auto">
              {{ contactCopy.ctaPrimary }}
            </AppButton>
            <AppButton
              href="#contact-form"
              variant="glass"
              class="w-full sm:w-auto"
            >
              {{ contactCopy.ctaSecondary }}
            </AppButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact channels + form -->
    <div id="contact-form" class="bg-background py-16 sm:py-24 lg:py-32">
      <div class="mx-auto max-w-6xl px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div v-reveal>
            <h3 class="font-heading text-3xl font-bold text-foreground">
              {{ contactCopy.formTitle }}
            </h3>
            <p class="mt-3 leading-relaxed text-muted-foreground">
              {{ contactCopy.formLead }}
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                v-for="channel in contactChannels"
                :key="channel.label"
                :href="channel.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  class="flex size-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground"
                >
                  <component :is="channel.icon" class="size-5" />
                </span>
                <span class="min-w-0">
                  <span
                    class="block text-xs uppercase tracking-wider text-muted-foreground"
                  >
                    {{ channel.label }}
                  </span>
                  <span
                    class="block truncate text-sm font-medium text-foreground"
                  >
                    {{ channel.value }}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div v-reveal="{ delay: 120 }">
            <form
              class="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              @submit.prevent="handleSubmit"
            >
              <div
                v-if="sent"
                class="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <span
                  class="flex size-14 items-center justify-center rounded-full bg-secondary/15 text-secondary"
                >
                  <Check class="size-7" />
                </span>
                <p class="font-heading text-xl font-bold text-foreground">
                  {{ contactCopy.successTitle }}
                </p>
                <p class="max-w-xs text-sm text-muted-foreground">
                  {{ contactCopy.successText }}
                </p>
              </div>
              <div v-else class="flex flex-col gap-4">
                <div class="grid gap-4 sm:grid-cols-2">
                  <label for="name" class="flex flex-col gap-2">
                    <span
                      class="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Անուն
                    </span>
                    <input
                      id="name"
                      v-model="form.name"
                      name="name"
                      required
                      :disabled="loading"
                      class="form-input"
                      placeholder="Ձեր անունը"
                    />
                  </label>
                  <label for="phone" class="flex flex-col gap-2">
                    <span
                      class="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                    >
                      Հեռախոս / Email
                    </span>
                    <input
                      id="phone"
                      v-model="form.phone"
                      name="phone"
                      required
                      :disabled="loading"
                      class="form-input"
                      placeholder="Ինչպես կապվել ձեզ հետ"
                    />
                  </label>
                </div>
                <label for="message" class="flex flex-col gap-2">
                  <span
                    class="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Պատմեք ձեր նախագծի մասին
                  </span>
                  <textarea
                    id="message"
                    v-model="form.message"
                    name="message"
                    required
                    rows="4"
                    :disabled="loading"
                    class="form-input resize-none"
                    placeholder="Վայր, նկարահանման տեսակ, ձեր գաղափարը..."
                  />
                </label>
                <p v-if="error" class="text-sm font-medium text-destructive">
                  {{ error }}
                </p>
                <button
                  type="submit"
                  :disabled="loading"
                  class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {{ loading ? 'Ուղարկվում է...' : 'Ուղարկել հաղորդագրությունը' }}
                  <Loader2 v-if="loading" class="size-4 animate-spin" />
                  <Send v-else class="size-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
