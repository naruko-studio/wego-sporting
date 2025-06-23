import { getUser } from "~/utils/query"

export default defineEventHandler(async (event) => {
  const filter = getQuery(event).id
  return await getUser(filter?.toString())
})
