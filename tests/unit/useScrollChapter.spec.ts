import { describe, it, expect, vi } from 'vitest'
import { defineComponent, h, ref, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useScrollChapter } from '~/composables/useScrollChapter'

class IOStub {
  callback: IntersectionObserverCallback
  constructor(cb: IntersectionObserverCallback) { this.callback = cb }
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  trigger(entries: Partial<IntersectionObserverEntry>[]) {
    this.callback(entries as IntersectionObserverEntry[], this as unknown as IntersectionObserver)
  }
}

function setup(onEnter: () => void, onExit: () => void) {
  const observers: IOStub[] = []
  vi.stubGlobal('IntersectionObserver', class extends IOStub {
    constructor(cb: IntersectionObserverCallback) { super(cb); observers.push(this) }
  })

  const Comp = defineComponent({
    setup() {
      const el = ref<HTMLElement | null>(null)
      useScrollChapter(el, { onEnter, onExit })
      return () => h('div', { ref: el })
    },
  })

  const wrapper = mount(Comp, { attachTo: document.body })
  return { observers, wrapper }
}

describe('useScrollChapter', () => {
  it('calls onEnter when element is intersecting', async () => {
    const onEnter = vi.fn()
    const onExit = vi.fn()
    const { observers } = setup(onEnter, onExit)
    await nextTick()

    observers[0].trigger([{ isIntersecting: true, intersectionRatio: 0.6 }])
    expect(onEnter).toHaveBeenCalledTimes(1)
    expect(onExit).not.toHaveBeenCalled()
  })

  it('calls onExit when element stops intersecting', async () => {
    const onEnter = vi.fn()
    const onExit = vi.fn()
    const { observers } = setup(onEnter, onExit)
    await nextTick()

    observers[0].trigger([{ isIntersecting: true, intersectionRatio: 0.6 }])
    observers[0].trigger([{ isIntersecting: false, intersectionRatio: 0 }])
    expect(onExit).toHaveBeenCalledTimes(1)
  })
})
