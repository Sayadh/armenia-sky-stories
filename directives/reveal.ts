import type { Directive, DirectiveBinding } from 'vue'

interface RevealOptions {
  /** Delay before the animation starts, in ms */
  delay?: number
  /** Visibility ratio that triggers the reveal (0–1) */
  threshold?: number
}

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

/**
 * v-reveal — fades + slides an element into view once it enters the viewport.
 * Usage: `v-reveal` or `v-reveal="{ delay: 120 }"`.
 */
export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding: DirectiveBinding<RevealOptions | undefined>) {
    const { delay = 0, threshold = 0.15 } = binding.value ?? {}

    el.classList.add('reveal')
    el.style.animationDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    observers.get(el)?.disconnect()
    observers.delete(el)
  },
}
