import { onMounted, onBeforeUnmount, type Ref, watch } from 'vue'

interface Options {
  onEnter?: () => void
  onExit?: () => void
  threshold?: number
}

export function useScrollChapter(
  target: Ref<HTMLElement | null>,
  { onEnter, onExit, threshold = 0.5 }: Options,
): void {
  let observer: IntersectionObserver | null = null

  const start = () => {
    if (!target.value) return
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          onEnter?.()
        } else {
          onExit?.()
        }
      },
      { threshold: [0, threshold, 1] },
    )
    observer.observe(target.value)
  }

  onMounted(() => {
    start()
    watch(target, () => {
      observer?.disconnect()
      start()
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
