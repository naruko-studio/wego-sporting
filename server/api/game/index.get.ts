import { getGame } from "~/utils/query"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const filter = query.id
  const result = getGame(filter?.toString())
  return result
})
