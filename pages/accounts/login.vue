<script setup lang="ts">
import { authClient } from "~/auth-client"

import * as z from "zod"
import type { FormSubmitEvent } from "@nuxt/ui"

const fields = [
  {
    name: "username",
    type: "text" as const,
    label: "帳號",
    placeholder: "輸入您的帳號",
  },
  {
    name: "password",
    label: "密碼",
    type: "password" as const,
    placeholder: "輸入您的密碼",
  },
]

const providers = [
  {
    label: "Google",
    icon: "i-simple-icons-google",
    onClick: () => {
      authClient.signIn.social({
        provider: "google",
      })
    },
  },
]

const schema = z.object({
  username: z.string(),
  password: z.string().min(8, "密碼至少需要8個字元"),
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
  const credentialLoginResult = await authClient.signIn.username({
    username: payload.data.username,
    password: payload.data.password,
  })
  if (!credentialLoginResult.data) {
    useToast().add({
      title: "登入失敗",
      description: credentialLoginResult.error.code,
      color: "error",
      duration: 3000,
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="登入平台"
        description="輸入帳號密碼或使用OAuth2第三方登入."
        icon="i-lucide-user"
        :fields="fields"
        separator=""
        :providers="providers"
        @submit="onSubmit"
      >
        <template #username-hint>
          <ULink to="register" class="text-primary font-medium" tabindex="-1"
            >立即註冊</ULink
          >
        </template>
        <template #password-hint>
          <ULink
            to="forgot-password"
            class="text-primary font-medium"
            tabindex="-1"
            >忘記密碼</ULink
          >
        </template>
        <template #footer>
          登入即表示你同意我們的
          <ULink
            href="/tos"
            class="text-primary font-medium underline"
            target="_blank"
            >服務條款</ULink
          >
          與
          <ULink
            href="/privacy"
            class="text-primary font-medium underline"
            target="_blank"
            >隱私政策</ULink
          >
          。
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
