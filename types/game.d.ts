export interface Game {
  id: string
  name: string
  country: string
  venue: string
  address: string
  signupStart: Date
  signupEnd: Date
  gameStart: Date
  gameEnd: Date
  image?: string
}

export interface GameInsertData {
  name: string
  country: string
  venue: string
  address: string
  signupStart: Date
  signupEnd: Date
  gameStart: Date
  gameEnd: Date
  image?: string
}
