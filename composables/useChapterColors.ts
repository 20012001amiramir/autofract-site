export type Chapter = 'pathcore' | 'bashka' | 'oyka' | 'videolinker' | 'link19'

const CHAPTER_CLASSES = ['chapter-pathcore', 'chapter-bashka', 'chapter-oyka', 'chapter-videolinker', 'chapter-link19']

export function setChapter(chapter: Chapter): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  CHAPTER_CLASSES.forEach(c => root.classList.remove(c))
  root.classList.add(`chapter-${chapter}`)
}

export function clearChapter(): void {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  CHAPTER_CLASSES.forEach(c => root.classList.remove(c))
}
