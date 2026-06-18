'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Item = {
  src: string
  title: string
  location: string
  type: 'video' | 'photo'
  span: string
}

const items: Item[] = [
  {
    src: '/images/region-tatev.png',
    title: 'Տաթևի վանք',
    location: 'Սյունիք',
    type: 'video',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/region-sevan.png',
    title: 'Սևանա լիճ',
    location: 'Գեղարքունիք',
    type: 'photo',
    span: '',
  },
  {
    src: '/images/region-khorvirap.png',
    title: 'Խոր Վիրապ',
    location: 'Արարատ',
    type: 'video',
    span: '',
  },
  {
    src: '/images/region-jermuk.png',
    title: 'Ջերմուկի ջրվեժ',
    location: 'Վայոց ձոր',
    type: 'photo',
    span: 'lg:col-span-2',
  },
  {
    src: '/images/region-dilijan.png',
    title: 'Դիլիջանի անտառներ',
    location: 'Տավուշ',
    type: 'photo',
    span: '',
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Item | null>(null)

  return (
    <section id="portfolio" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Պորտֆոլիո
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Իմ աշխատանքները
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Յուրաքանչյուր կադր պատմում է իր պատմությունը։ Սեղմեք ցանկացած
            աշխատանքի վրա՝ դիտելու համար։
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className={item.span}>
              <button
                type="button"
                onClick={() => setActive(item)}
                className="group relative h-full w-full overflow-hidden rounded-3xl shadow-sm"
              >
                <img
                  src={item.src || '/placeholder.svg'}
                  alt={`${item.title}, ${item.location}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {item.type === 'video' && (
                  <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass-dark text-white transition-transform group-hover:scale-110">
                    <Play className="size-5 translate-x-0.5" />
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <p className="font-heading text-lg font-bold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {item.location}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <button
            type="button"
            aria-label="Փակել"
            className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full glass text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img
                src={active.src || '/placeholder.svg'}
                alt={`${active.title}, ${active.location}`}
                className="h-full w-full object-cover"
              />
              {active.type === 'video' && (
                <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass-dark text-white">
                  <Play className="size-7 translate-x-1" />
                </span>
              )}
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="font-heading text-xl font-bold text-foreground">
                  {active.title}
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-secondary">
                  {active.location}
                </p>
              </div>
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {active.type === 'video' ? 'Տեսանյութ' : 'Լուսանկար'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
