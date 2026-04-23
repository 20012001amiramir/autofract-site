export type Chapter = 'bashka' | 'oyka'

const CHAPTER_CLASSES = ['chapter-bashka', 'chapter-oyka']

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
