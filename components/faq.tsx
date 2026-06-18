import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'Որքա՞ն արժե նկարահանումը',
    a: 'Գինը կախված է նախագծի տեսակից, վայրից և նկարահանման ծավալից։ Կարճ քննարկումից հետո ձեզ կներկայացնեմ անհատական գնառաջարկ։',
  },
  {
    q: 'Հայաստանի ո՞ր մարզերում եք աշխատում',
    a: 'Ամբողջ Հայաստանի տարածքում՝ Երևանից և Արարատյան դաշտից մինչև Սևան, Տաթև, Դիլիջան և հեռավոր լեռնային շրջաններ։',
  },
  {
    q: 'Որքա՞ն ժամանակում է պատրաստ լինում տեսանյութը',
    a: 'Սովորաբար 1-ից 5 աշխատանքային օրվա ընթացքում։ Ավելի ծավալուն նախագծերը կարող են պահանջել մի փոքր ավելի շատ ժամանակ։',
  },
  {
    q: 'Հնարավո՞ր է անհատական մոտեցում',
    a: 'Այո, յուրաքանչյուր նախագիծ քննարկվում է առանձին՝ ձեր գաղափարների և ոճի հիման վրա։',
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Հարցեր
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Հաճախ տրվող հարցեր
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-3 rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-heading text-lg font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
