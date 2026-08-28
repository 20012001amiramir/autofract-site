import { canonicalizeSitemap } from '../../data/site'

/**
 * Keeps /sitemap.xml speaking the same URL form as the pages it lists: the home
 * page is `https://autofract.com`, never the trailing-slash variant.
 */
export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('sitemap:output', (ctx: { sitemap: string }) => {
    ctx.sitemap = canonicalizeSitemap(ctx.sitemap)
  })
})
