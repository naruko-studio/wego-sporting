import { getGameCount } from "~/utils/query"
export default defineEventHandler(async () => {
  const count = await getGameCount()
  return { count }
})
