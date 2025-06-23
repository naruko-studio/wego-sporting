import { authClient } from "~/auth-client"
export default defineNuxtRouteMiddleware(async (to, _from) => {
  const { data: session } = await authClient.useSession(useFetch)
  if (!session.value) {
    if (to.path.startsWith("/dashboard") || to.path.startsWith("/signup")) {
      return navigateTo(
        `/accounts/login?redirect=${encodeURIComponent(to.fullPath)}`,
      )
    }
    if (to.path.startsWith("/test")) {
      throw createError({ statusCode: 404 })
    }
  } else {
    if (to.path.startsWith("/test") || to.path.startsWith("/tst")) {
      if (session.value?.user.role !== "owner") {
        throw createError({ statusCode: 404 })
      }
    }
    if (
      session.value?.user.role !== "admin" &&
      session.value?.user.role !== "owner"
    ) {
      if (to.path.startsWith("/dashboard")) {
        throw createError({ statusCode: 403 })
      }
    }
  }
})
