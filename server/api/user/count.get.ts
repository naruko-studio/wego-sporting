import { getUserCount } from "~/utils/query"

export default defineEventHandler(async () => {
  const count = await getUserCount()
  return { count }
})
