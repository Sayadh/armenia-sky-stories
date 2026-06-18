import { vReveal } from '~/directives/reveal'

// Registered on both server and client. The directive's hooks only run on the
// client (IntersectionObserver), so SSR just needs the directive to exist.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', vReveal)
})
