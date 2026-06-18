import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Testimonials() {
  return (
    <section className="relative bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Կարծիքներ
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-foreground text-balance sm:text-5xl">
            Ստեղծենք միասին
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
            <Quote className="mx-auto h-12 w-12 text-accent" />
            <p className="mt-6 text-pretty font-heading text-xl leading-relaxed text-foreground sm:text-2xl">
              «Պորտֆոլիոն շարունակաբար համալրվում է նոր նախագծերով։ Եթե ունեք
              հետաքրքիր գաղափար, սիրով կօգնեմ այն իրականություն դարձնել։»
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                Ս
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Սայադ</p>
                <p className="text-sm text-muted-foreground">Դրոնի օպերատոր</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
