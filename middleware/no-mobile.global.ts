export default defineNuxtRouteMiddleware((to, _from) => {
  if (!import.meta.client) return // SSR 階段提前結束，避免後續執行

  const userAgent = navigator.userAgent
  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    ) || window.innerWidth <= 768

  if (isMobile && to.path.startsWith("/dashboard")) {
    throw createError({
      statusCode: 403,
      statusMessage: "Mobile access denied",
    })
  }
})
