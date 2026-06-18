import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    title: 'Կապ եք հաստատում',
    desc: 'Գրում եք ինձ, և մենք քննարկում ենք ձեր նախագիծը և նպատակները։',
  },
  {
    n: '02',
    title: 'Քննարկում ենք գաղափարը',
    desc: 'Միասին ճշտում ենք վայրերը, ոճը և ցանկալի արդյունքը։',
  },
  {
    n: '03',
    title: 'Իրականացնում ենք նկարահանումը',
    desc: 'Ընտրված վայրերում նկարահանում եմ տպավորիչ օդային կադրեր։',
  },
  {
    n: '04',
    title: 'Կատարում եմ մոնտաժը',
    desc: 'Պրոֆեսիոնալ գունավորում և կինեմատոգրաֆիկ մոնտաժ։',
  },
  {
    n: '05',
    title: 'Ստանում եք պատրաստ արդյունքը',
    desc: 'Ստանում եք պատրաստ, կիսվելու համար պատրաստ լուսանկարներ և տեսանյութեր։',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Աշխատանքի ընթացքը
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Ինչպե՞ս է իրականացվում պատվերը
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-primary via-secondary to-accent sm:block" />
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="flex items-start gap-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-lg">
                    {step.n}
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
