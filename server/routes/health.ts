export default defineEventHandler((event) => {
  setResponseHeader(event, 'Cache-Control', 'no-store')
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return 'ok'
})
