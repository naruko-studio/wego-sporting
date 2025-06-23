import { deleteGame } from "~/utils/query"
export default defineEventHandler(async (event) => {
  const filter = getQuery(event).id
  if (!filter) {
    return { error: "Missing id parameter" }
  }
  return await deleteGame(filter.toString())
})
