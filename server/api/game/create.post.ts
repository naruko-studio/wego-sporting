import type { GameInsertData } from "~/types/game"
import { createGame } from "~/utils/query"
export default defineEventHandler(async (event) => {
  const body = await readBody<GameInsertData>(event)
  return await createGame(body)
})
