export interface User {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image: string
  createdAt: Date
  updatedAt: Date
  role: string
  banned: boolean
  banReason: string
  banExpires: Date
  username: string
  displayUsername: string
}

export interface UserUpdateData {}
