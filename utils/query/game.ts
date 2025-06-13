import { prisma } from "./client"
export const getGameCount = async () => {
  return await prisma.game.count()
}
export const getGame = async (filter?: string) => {
  try {
    if (filter) return await prisma.game.findUnique({ where: { id: filter } })
    else return await prisma.game.findMany({ orderBy: { id: "asc" } })
  } catch (error) {
    console.error("Error fetching game(s):", error)
    throw new Error("Failed to fetch game(s)")
  }
}
