'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'Իմ մասին' },
  { href: '#services', label: 'Ծառայություններ' },
  { href: '#portfolio', label: 'Աշխատանքներ' },
  { href: '#map', label: 'Հայաստանը վերևից' },
  { href: '#faq', label: 'Հարցեր' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          className={cn(
            'flex items-center gap-2 font-heading text-lg font-bold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          <span
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full transition-colors',
              scrolled
                ? 'bg-primary text-primary-foreground'
                : 'glass-dark text-white',
            )}
          >
            <Plane className="h-4 w-4" />
          </span>
          Armenia Sky Stories
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-muted-foreground' : 'text-white/90',
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:scale-105"
          >
            Պատվիրել նկարահանում
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Բացել ընտրացանկը"
          className={cn(
            'md:hidden',
            scrolled || open ? 'text-foreground' : 'text-white',
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Պատվիրել նկարահանում
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
