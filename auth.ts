import { prismaAdapter } from "better-auth/adapters/prisma"
import { PrismaClient } from "~/generated/prisma"
import { username, admin } from "better-auth/plugins"
import { passkey } from "better-auth/plugins/passkey"
import { betterAuth } from "better-auth"

const client = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(client, {
    provider: "postgresql",
  }),
  appName: "nuxt-app",
  plugins: [admin(), passkey(), username()],
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})
