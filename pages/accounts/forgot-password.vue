<script setup lang="ts">
import * as z from "zod"
import type { FormSubmitEvent } from "@nuxt/ui"

const toast = useToast()

const fields = [
  {
    name: "email",
    type: "text" as const,
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
]

const schema = z.object({
  email: z.string().email("Invalid email"),
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log("Submitted", payload)
  toast.add({
    title: "已發送重設密碼連結",
    description: "請查看您的信箱以重設密碼",
    color: "success",
    duration: 3000,
  })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        title="重設密碼"
        description="請輸入您的電子郵件地址以重設密碼"
        icon="i-lucide-user"
        :fields="fields"
        @submit="onSubmit"
      />
    </UPageCard>
  </div>
</template>
