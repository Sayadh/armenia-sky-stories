import { Cpu, Heart, Film, Clock, Zap, Mountain } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const reasons = [
  {
    icon: Cpu,
    title: 'Ժամանակակից DJI սարքավորում',
    desc: 'Վերջին սերնդի դրոներ՝ կայուն և հստակ օդային կադրերի համար։',
  },
  {
    icon: Film,
    title: 'Բարձրորակ 4K նկարահանում',
    desc: 'Կտրուկ մանրամասներ և գունային հարստություն յուրաքանչյուր կադրում։',
  },
  {
    icon: Heart,
    title: 'Անհատական մոտեցում',
    desc: 'Յուրաքանչյուր նախագիծ ձևավորվում է ձեր տեսլականի շուրջ։',
  },
  {
    icon: Mountain,
    title: 'Կինեմատոգրաֆիկ մոնտաժ',
    desc: 'Պրոֆեսիոնալ գունավորում և մոնտաժ՝ կինոյի որակով։',
  },
  {
    icon: Zap,
    title: 'Արագ իրականացում',
    desc: 'Արագ հաղորդակցություն և հուսալի առաքում՝ սկզբից մինչև վերջ։',
  },
  {
    icon: Clock,
    title: 'Հայաստանի լավագույն տեսարանները',
    desc: 'Գիտեմ՝ որտեղ և երբ նկարահանել ամենագեղեցիկ կադրերը։',
  },
]

export function WhyChoose() {
  return (
    <section className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Առավելություններ
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Ինչու՞ ընտրել ինձ
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                  <reason.icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
