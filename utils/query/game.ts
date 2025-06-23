import { prisma } from "./client"
import type { Game, GameInsertData } from "@/types/game"

export const getGameCount = async () => {
  return await prisma.game.count()
}

export const getGame = async (id?: string) => {
  try {
    if (id) {
      if (id === null || id === "null") {
        return {}
      }
      return await prisma.game.findUnique({ where: { id } })
    } else
      return await prisma.game.findMany({
        orderBy: [{ signupStart: "asc" }, { gameStart: "asc" }],
      })
  } catch (error) {
    console.error("Error fetching game(s):", error)
    throw new Error("Failed to fetch game(s)")
  }
}

export const updateGame = async (data: Game) => {
  try {
    console.log(data)
  } catch (error) {
    console.log("Error update game:", error)
  }
}

export const createGame = async (data: GameInsertData) => {
  try {
    const {
      name,
      country,
      venue,
      address,
      signupStart,
      signupEnd,
      gameStart,
      gameEnd,
    } = data
    return await prisma.game.create({
      data: {
        name,
        country,
        venue,
        address,
        signupStart,
        signupEnd,
        gameStart,
        gameEnd,
      },
    })
  } catch (error) {
    console.error("Error creating game:", error)
    if (error instanceof Error) {
      throw new Error(`Failed to create game: ${error.message}`)
    }
    throw new Error("Failed to create game: Unknown error")
  }
}

export const deleteGame = async (id: string) => {
  try {
    return await prisma.game.delete({ where: { id } })
  } catch (error) {
    console.log("Error deleting game:", error)
    if (error instanceof Error) {
      throw new Error(`Failed to delete game: ${error.message}`)
    }
    throw new Error("Failed to delete game: Unknown error")
  }
}
