import { Reveal } from '@/components/reveal'

const services = [
  {
    image: '/images/svc-landmarks.png',
    title: 'Տեսարժան վայրերի նկարահանում',
    desc: 'Հայաստանի գեղեցիկ վայրերի կինեմատոգրաֆիկ օդային կադրեր՝ զբոսաշրջային, գովազդային և անձնական նախագծերի համար։',
  },
  {
    image: '/images/svc-property.png',
    title: 'Հողատարածքների և գույքի նկարահանում',
    desc: 'Օդային լուսանկարներ և տեսանյութեր հողատարածքների, առանձնատների, շինությունների և կոմերցիոն տարածքների համար։',
  },
  {
    image: '/images/svc-personal.png',
    title: 'Անհատական նկարահանում',
    desc: 'Ընտանեկան, սիրային, ընկերական և հատուկ պահերի հիշարժան օդային կադրեր։',
  },
  {
    image: '/images/svc-tours.png',
    title: 'Տուրեր և հատուկ նախագծեր',
    desc: 'Դրոնային նկարահանումներ զբոսաշրջային խմբերի, միջոցառումների և տարբեր ստեղծագործական նախագծերի համար։',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Ծառայություններ
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Ծառայություններ՝ ստեղծված ձեր պատմության շուրջ
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image || '/placeholder.svg'}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
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
