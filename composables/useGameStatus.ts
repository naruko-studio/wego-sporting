import type { Game } from "~/types/game"

export const useGameStatus = (now: Ref<number>) => {
  const getStatus = (game: Game) => {
    const t = now.value
    const signupStart = new Date(game.signupStart).getTime()
    const signupEnd = new Date(game.signupEnd).getTime()
    const gameStart = new Date(game.gameStart).getTime()
    const gameEnd = new Date(game.gameEnd).getTime()

    if (t < signupStart) return "signup-waiting"
    else if (t < signupEnd) return "signup-start"
    else if (t < gameStart) return "signup-end"
    else if (t < gameEnd) return "game-start"
    else return "game-end"
  }

  const formatCountdown = (endTime: number, prefix: string) => {
    const diff = endTime - now.value
    if (diff <= 0) return `${prefix}已結束`

    const d = Math.floor(diff / 86400000)
    const h = Math.floor((diff % 86400000) / 3600000)
    const m = Math.floor((diff % 3600000) / 60000)

    if (d > 0) return `${prefix}還剩 ${d} 天`
    if (h > 0) return `${prefix}還剩 ${h} 小時`
    if (m > 0) return `${prefix}還剩 ${m} 分鐘`
    return `${prefix}即將結束`
  }

  const getCountdownText = (game: Game) => {
    const status = getStatus(game)
    const t = now.value

    if (status === "signup-waiting") {
      return formatCountdown(
        new Date(game.signupStart).getTime(),
        "距離報名開始",
      )
    } else if (status === "signup-start") {
      return formatCountdown(new Date(game.signupEnd).getTime(), "距離報名結束")
    } else if (status === "signup-end") {
      const diff = new Date(game.gameStart).getTime() - t
      const days = Math.ceil(diff / 86400000)
      return `報名已截止，距離賽事開始倒數 ${days} 天`
    }
    return ""
  }

  return { getStatus, getCountdownText }
}
