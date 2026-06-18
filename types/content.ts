import type { Component } from 'vue'

export interface NavLink {
  href: string
  label: string
}

export interface Stat {
  value: string
  label: string
}

export type MediaType = 'video' | 'photo'

export interface PortfolioItem {
  src: string
  title: string
  location: string
  type: MediaType
  /** Tailwind grid span classes for the masonry layout */
  span: string
}

export interface Region {
  id: string
  name: string
  image: string
  desc: string
}

export interface Advantage {
  icon: Component
  title: string
  desc: string
}

export interface ProcessStep {
  n: string
  title: string
  desc: string
}

export interface Faq {
  q: string
  a: string
}

export interface ContactChannel {
  icon: Component
  label: string
  value: string
  href: string
}

export interface SocialLink {
  icon: Component
  label: string
  href: string
}
