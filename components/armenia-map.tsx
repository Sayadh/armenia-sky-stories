'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const regions = [
  { id: 'sevan', name: 'Սևան', image: '/images/region-sevan.png', desc: 'Հայաստանի «կապույտ մարգարիտը»՝ տեսնված օդից։' },
  { id: 'dilijan', name: 'Դիլիջան', image: '/images/region-dilijan.png', desc: 'Հայկական Շվեյցարիան՝ անվերջ կանաչ անտառներով։' },
  { id: 'garni', name: 'Գառնի', image: '/images/region-garni.png', desc: 'Հեթանոսական տաճարը՝ կիրճի եզրին։' },
  { id: 'geghard', name: 'Գեղարդ', image: '/images/region-geghard.png', desc: 'Ժայռափոր վանքը՝ վեհ լեռների գրկում։' },
  { id: 'aragats', name: 'Արագած', image: '/images/region-aragats.png', desc: 'Հայաստանի ամենաբարձր գագաթը՝ խառնարանային լճով։' },
  { id: 'tatev', name: 'Տաթև', image: '/images/region-tatev.png', desc: 'Հնագույն վանքը՝ խոր կիրճի վրա։' },
  { id: 'khorvirap', name: 'Խոր Վիրապ', image: '/images/region-khorvirap.png', desc: 'Արարատի ֆոնին վեհ վանական համալիր։' },
  { id: 'jermuk', name: 'Ջերմուկ', image: '/images/region-jermuk.png', desc: 'Հայտնի ջրվեժը՝ կանաչ ձորում։' },
]

export function ArmeniaMap() {
  const [active, setActive] = useState(regions[0])

  return (
    <section id="map" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Հայաստանը վերևից
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Բացահայտեք Հայաստանը օդից
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Բացահայտեք Հայաստանի գեղեցկությունը օդից՝ նոր տեսանկյունից։ Ընտրեք
            վայր՝ դիտելու համար։
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="flex flex-wrap content-start gap-3 lg:flex-col">
            {regions.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setActive(region)}
                className={cn(
                  'flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left text-sm font-semibold transition-all',
                  active.id === region.id
                    ? 'border-transparent bg-primary text-primary-foreground shadow-lg'
                    : 'border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted',
                )}
              >
                <MapPin className="h-4 w-4 shrink-0" />
                {region.name}
              </button>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              {regions.map((region) => (
                <img
                  key={region.id}
                  src={region.image || '/placeholder.svg'}
                  alt={region.name}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-700',
                    active.id === region.id ? 'opacity-100' : 'opacity-0',
                  )}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {active.name}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">
                  {active.desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
