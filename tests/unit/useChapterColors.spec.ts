import { describe, it, expect, beforeEach } from 'vitest'
import { setChapter, clearChapter } from '~/composables/useChapterColors'

describe('useChapterColors', () => {
  beforeEach(() => {
    document.documentElement.className = ''
  })

  it('adds chapter class to <html> when setChapter called', () => {
    setChapter('pathcore')
    expect(document.documentElement.classList.contains('chapter-pathcore')).toBe(true)
  })

  it('replaces previous chapter class when setChapter called again', () => {
    setChapter('pathcore')
    setChapter('videolinker')
    expect(document.documentElement.classList.contains('chapter-pathcore')).toBe(false)
    expect(document.documentElement.classList.contains('chapter-videolinker')).toBe(true)
  })

  it('removes all chapter classes when clearChapter called', () => {
    setChapter('videolinker')
    clearChapter()
    expect(document.documentElement.classList.contains('chapter-videolinker')).toBe(false)
    expect(document.documentElement.className).toBe('')
  })
})
