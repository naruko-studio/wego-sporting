import { prisma } from "./client"
export const getUserCount = async () => {
  try {
    return await prisma.user.count()
  } catch (error) {
    console.error("Error fetching user count:", error)
    throw new Error("Failed to fetch user count")
  }
}
export const getUser = async (filter?: string) => {
  try {
    if (filter) return await prisma.user.findUnique({ where: { id: filter } })
    else return await prisma.user.findMany({ orderBy: { id: "asc" } })
  } catch (error) {
    console.error("Error fetching user(s):", error)
    throw new Error("Failed to fetch user(s)")
  }
}
export const updateUser = async (id: string) => {
  console.log(id)
}
