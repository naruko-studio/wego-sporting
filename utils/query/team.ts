import { prisma } from "~/utils/query/client"

export const getTeam = async (id: string) => {
  try {
    return await prisma.team.findUnique({ where: { id } })
  } catch (error) {
    console.error("Error fetching team:", error)
    throw new Error("Failed to fetch team")
  }
}

export const setTeam = async () => {}

export const updateTeam = async () => {}
