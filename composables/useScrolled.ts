/**
 * Reactive flag that turns true once the page is scrolled past `threshold` px.
 * Used by the navbar to switch between transparent and glass states.
 */
export function useScrolled(threshold = 40) {
  const scrolled = ref(false)

  const onScroll = () => {
    scrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { scrolled }
}
