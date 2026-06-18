<script setup lang="ts">
import { stats } from '~/data/stats'
</script>

<template>
  <section id="about" class="relative bg-muted/40 py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div v-reveal class="relative">
          <div
            class="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src="/images/about-pilot.png"
              alt="Սայադը՝ դրոնի օպերատորը, լեռների ֆոնին"
              class="h-full w-full object-cover"
            />
          </div>
          <div
            class="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-6 py-4 shadow-lg sm:block"
          >
            <p class="font-heading text-2xl font-bold text-primary">DJI</p>
            <p class="text-xs text-muted-foreground">Պրոֆեսիոնալ սարքավորում</p>
          </div>
        </div>

        <div v-reveal="{ delay: 120 }">
          <p
            class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            Իմ մասին
          </p>
          <h2
            class="font-heading text-3xl font-bold leading-tight text-foreground text-balance sm:text-4xl lg:text-5xl"
          >
            Ողջույն, ես Սայադն եմ
          </h2>
          <div
            class="mt-6 space-y-4 leading-relaxed text-muted-foreground text-pretty"
          >
            <p>
              Ես զբաղվում եմ դրոնային լուսանկարահանմամբ և տեսանկարահանմամբ՝
              ներկայացնելով Հայաստանը մի անկյունից, որը սովորաբար մնում է
              անտեսանելի։
            </p>
            <p>
              Իմ նպատակը պարզապես տեսանյութ նկարելը չէ։ Ես ստեղծում եմ
              պատմություններ, որոնք փոխանցում են վայրի գեղեցկությունը, պահի
              էմոցիան և յուրահատուկ մթնոլորտը։
            </p>
            <p>
              Յուրաքանչյուր նախագիծ իրականացնում եմ անհատական մոտեցմամբ՝
              ուշադրություն դարձնելով յուրաքանչյուր մանրուքի։
            </p>
          </div>

          <div
            class="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8"
          >
            <div v-for="stat in stats" :key="stat.label">
              <p class="font-heading text-3xl font-bold text-primary">
                {{ stat.value }}
              </p>
              <p class="mt-1 text-xs text-muted-foreground">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
