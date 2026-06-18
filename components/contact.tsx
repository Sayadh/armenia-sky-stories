'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Send, MessageCircle, Camera, Check, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const channels = [
  { icon: Phone, label: 'Հեռախոս', value: '+374 00 000 000', href: 'tel:+37400000000' },
  { icon: Send, label: 'Telegram', value: '@armeniaskystories', href: 'https://t.me/armeniaskystories' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+374 00 000 000', href: 'https://wa.me/37400000000' },
  { icon: Camera, label: 'Instagram', value: '@armenia.sky.stories', href: 'https://instagram.com/armenia.sky.stories' },
  { icon: Mail, label: 'Email', value: 'hello@armeniaskystories.am', href: 'mailto:hello@armeniaskystories.am' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative">
      {/* Final CTA with sunset background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-sunset.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold leading-tight text-white text-balance drop-shadow-lg sm:text-5xl lg:text-6xl">
              Պատրա՞ստ եք տեսնել Հայաստանը նոր տեսանկյունից
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/90 text-pretty">
              Եկեք միասին ստեղծենք հիշվող և յուրահատուկ օդային կադրեր։
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-xl transition-transform hover:scale-105 sm:w-auto"
              >
                Կապ հաստատել
              </a>
              <a
                href="#contact-form"
                className="glass-dark w-full rounded-full px-8 py-4 text-base font-semibold text-white transition-transform hover:scale-105 sm:w-auto"
              >
                Պատվիրել նկարահանում
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Contact channels + form */}
      <div id="contact-form" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h3 className="font-heading text-3xl font-bold text-foreground">
                Կապ հաստատենք
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Ընտրեք ձեզ հարմար եղանակը կամ ուղարկեք հաղորդագրություն ուղիղ։
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      <c.icon className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-foreground">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <span className="flex size-14 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Check className="size-7" />
                    </span>
                    <p className="font-heading text-xl font-bold text-foreground">
                      Հաղորդագրությունն ուղարկվեց
                    </p>
                    <p className="max-w-xs text-sm text-muted-foreground">
                      Շնորհակալություն։ Շուտով կկապվեմ ձեզ հետ՝ նախագիծը
                      քննարկելու համար։
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Անուն" id="name">
                        <input
                          id="name"
                          name="name"
                          required
                          className="form-input"
                          placeholder="Ձեր անունը"
                        />
                      </Field>
                      <Field label="Հեռախոս / Email" id="phone">
                        <input
                          id="phone"
                          name="phone"
                          required
                          className="form-input"
                          placeholder="Ինչպես կապվել ձեզ հետ"
                        />
                      </Field>
                    </div>
                    <Field label="Պատմեք ձեր նախագծի մասին" id="message">
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="form-input resize-none"
                        placeholder="Վայր, նկարահանման տեսակ, ձեր գաղափարը..."
                      />
                    </Field>
                    <button
                      type="submit"
                      className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
                    >
                      Ուղարկել հաղորդագրությունը
                      <Send className="size-4" />
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
