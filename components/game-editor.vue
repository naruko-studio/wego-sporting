<script setup lang="ts">
import * as z from "zod"
import type { FormSubmitEvent } from "@nuxt/ui"

const { toLocalDatetimeString } = useDatetimeLocal()

const emit = defineEmits<{ close: [boolean] }>()

const props = withDefaults(defineProps<{ id?: string }>(), {
  id: null,
})

const { data } = await useFetch(`/api/game?id=${props.id}`)

const schema = z.object({
  id: z.string().optional().or(z.literal("")),
  name: z.string(),
  country: z.string(),
  venue: z.string(),
  address: z.string(),
  signupStart: z.string(),
  signupEnd: z.string(),
  gameStart: z.string(),
  gameEnd: z.string(),
  image: z.string().url().optional().or(z.literal("")),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  id: data.value?.id || "",
  name: data.value?.name || "",
  country: data.value?.country || "",
  venue: data.value?.venue || "",
  address: data.value?.address || "",
  signupStart: toLocalDatetimeString(data.value?.signupStart) || "",
  signupEnd: toLocalDatetimeString(data.value?.signupEnd) || "",
  gameStart: toLocalDatetimeString(data.value?.gameStart) || "",
  gameEnd: toLocalDatetimeString(data.value?.gameEnd) || "",
  image: data.value?.image || "",
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
  emit("close", true)
}

const classList = ref<{ className: string }[]>([])
function addClass() {
  classList.value.push({ classType: "", className: "" })
}

function removeClass(index: number) {
  classList.value.splice(index, 1)
}
</script>

<template>
  <UModal :close="undefined" :dismissible="false">
    <slot />
    <template #content>
      <h2 class="mb-4 p-4 text-xl font-bold">
        {{ props.id ? `編輯賽事：${data.name}` : "新增賽事" }}
      </h2>
      <div class="max-h-[70vh] overflow-auto p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="grid grid-cols-2 gap-4 p-4"
          @submit="onSubmit"
        >
          <UFormField label="賽事ID" name="id" hidden>
            <UInput v-model="state.id" disabled class="w-full" />
          </UFormField>
          <UFormField label="賽事名稱" name="name">
            <UInput
              v-model="state.name"
              class="w-full"
              placeholder="賽事名稱"
            />
          </UFormField>
          <UFormField label="地區" name="country">
            <UInput v-model="state.country" class="w-full" placeholder="地區" />
          </UFormField>
          <UFormField label="場地" name="venue">
            <UInput v-model="state.venue" class="w-full" placeholder="場地" />
          </UFormField>
          <UFormField label="地址" name="address" class="col-span-2">
            <UInput v-model="state.address" class="w-full" placeholder="地址" />
          </UFormField>
          <UFormField label="賽事組別" name="class" class="col-span-2">
            <template #hint>
              <UButton icon="i-lucide-plus" @click="addClass" />
            </template>
            <div
              v-for="(group, index) in classList"
              :key="index"
              class="mt-2 flex gap-2"
            >
              <UInput
                v-model="group.classType"
                placeholder="項目類型"
                class="basis-1/5"
              />
              <UInput
                v-model="group.className"
                placeholder="組別名稱"
                class="flex-1"
              />
              <UButton
                icon="i-lucide-x"
                color="error"
                variant="ghost"
                @click="removeClass(index)"
              />
            </div>
          </UFormField>
          <UFormField label="報名開始日期" name="signupStart">
            <UInput
              v-model="state.signupStart"
              type="datetime-local"
              class="w-full"
            />
          </UFormField>
          <UFormField label="報名結束日期" name="signupEnd">
            <UInput
              v-model="state.signupEnd"
              type="datetime-local"
              class="w-full"
            />
          </UFormField>
          <UFormField label="賽事開始日期" name="gameStart">
            <UInput
              v-model="state.gameStart"
              type="datetime-local"
              class="w-full"
            />
          </UFormField>
          <UFormField label="賽事結束日期" name="gameEnd">
            <UInput
              v-model="state.gameEnd"
              type="datetime-local"
              class="w-full"
            />
          </UFormField>
          <UFormField label="賽事圖片" name="image" hidden>
            <UInput
              v-model="state.image"
              type="url"
              placeholder="本功能尚未開放"
            />
          </UFormField>
          <div class="col-span-2 flex justify-end gap-2">
            <UButton type="submit" label="送出" color="success" />
            <UButton label="取消" color="error" @click="emit('close', true)" />
          </div>
        </UForm>
      </div>
    </template>
  </UModal>
</template>
