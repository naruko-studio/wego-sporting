export default defineEventHandler(() => {
  return createError({ statusCode: 403 })
})
