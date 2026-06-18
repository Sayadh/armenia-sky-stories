import { Reveal } from '@/components/reveal'

const stats = [
  { value: '4K', label: 'Կինեմատոգրաֆիկ որակ' },
  { value: '10+', label: 'Մարզ ամբողջ երկրում' },
  { value: '100%', label: 'Անհատական մոտեցում' },
]

export function About() {
  return (
    <section id="about" className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/about-pilot.png"
                alt="Սայադը՝ դրոնի օպերատորը, լեռների ֆոնին"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -right-4 hidden rounded-2xl px-6 py-4 shadow-lg sm:block">
              <p className="font-heading text-2xl font-bold text-primary">DJI</p>
              <p className="text-xs text-muted-foreground">Պրոֆեսիոնալ սարքավորում</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Իմ մասին
            </p>
            <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
              Ողջույն, ես Սայադն եմ
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground text-pretty">
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

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
