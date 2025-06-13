import { getUser } from "~/utils/query"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const filter = query.id
  const result = getUser(filter?.toString())
  return result
})
