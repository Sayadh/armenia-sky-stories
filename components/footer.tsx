import { Phone, Send, MessageCircle, Camera, Mail, Plane } from 'lucide-react'

const socials = [
  { icon: Phone, label: 'Հեռախոս', href: 'tel:+37400000000' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/armeniaskystories' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/37400000000' },
  { icon: Camera, label: 'Instagram', href: 'https://instagram.com/armenia.sky.stories' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@armeniaskystories.am' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#hero"
            className="flex items-center gap-2 font-heading text-xl font-bold text-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Plane className="h-4 w-4" />
            </span>
            Armenia Sky Stories
          </a>
          <p className="max-w-md text-sm text-muted-foreground">
            Դրոնային նկարահանումներ Հայաստանում
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Armenia Sky Stories։ Բոլոր
            իրավունքները պաշտպանված են։
          </p>
        </div>
      </div>
    </footer>
  )
}
