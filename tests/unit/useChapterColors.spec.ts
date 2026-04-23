import { describe, it, expect, beforeEach } from 'vitest'
import { setChapter, clearChapter } from '~/composables/useChapterColors'

describe('useChapterColors', () => {
  beforeEach(() => {
    document.documentElement.className = ''
  })

  it('adds chapter class to <html> when setChapter called', () => {
    setChapter('bashka')
    expect(document.documentElement.classList.contains('chapter-bashka')).toBe(true)
  })

  it('replaces previous chapter class when setChapter called again', () => {
    setChapter('bashka')
    setChapter('oyka')
    expect(document.documentElement.classList.contains('chapter-bashka')).toBe(false)
    expect(document.documentElement.classList.contains('chapter-oyka')).toBe(true)
  })

  it('removes all chapter classes when clearChapter called', () => {
    setChapter('bashka')
    clearChapter()
    expect(document.documentElement.classList.contains('chapter-bashka')).toBe(false)
    expect(document.documentElement.className).toBe('')
  })
})
