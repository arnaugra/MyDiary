<script setup>

import { reactive, ref } from "vue"

import { updateEntry, getAllEntries } from "@/db.js"

import Label from "@components/Label.vue"
import InputText from "@components/InputText.vue"
import TextArea from "@components/TextArea.vue"
import Button from "@components/Button.vue"
import Icon from "@components/Icon.vue"
import ErrorInput from "@components/ErrorInput.vue"

const props = defineProps({
  entry: {
    type: Object,
  },
})

const emits = defineEmits(["closeModal", "openToast", "entryEdited"])

const formErrors = reactive({
  title: false,
  content: false,
})

const data = reactive({
  entry: {
    title: props.entry.title,
    content: props.entry.content,
  },
})

/**
 * Edits an entry in the database
 */
function editEntry() {
  if (data.entry.title === "") formErrors.title = true
  if (data.entry.content === "") formErrors.content = true
  if (!formErrors.title && !formErrors.content) {
    try {
      updateEntry({
        id: props.entry.id,
        date: props.entry.date,
        title: data.entry.title,
        content: data.entry.content,
      })
  
      console.log("entry edited")
      console.log(data.entry.title)
      console.log(data.entry.content)
  
      emits("closeModal", true)
      emits("entryEdited")
      emits("openToast", {
        type: 1,
        title: "Success",
        body: "Entry added successfully.",
        action: true,
        area: "z-50",
      })
    } catch (error) {
      emits("closeModal", true)
      emits("openToast", {
        type: 3,
        title: "Error",
        body: "Something went wrong.",
        action: true,
        area: "z-50",
      })
    }
  }
}

</script>

<template>
  <div class="absolute top-8 left-8 font-semibold text-xl ">Edit entry</div>
  <div class="mb-3">
    <Label text="Title" for="title">
      <InputText
        @focus="formErrors.title = false"
        @input="data.entry.title = $event.target.value"
        id="title"
        css="bg-transparent"
        :value="data.entry.title"
        placeholder="You can use an event to highlight this day."
        :max="50"
        :focus="true"
      />
    </Label>
    <ErrorInput
      v-if="formErrors.title"
      text="Title field needs to be filled."
    />
  </div>
  <div class="mb-3">
    <Label text="Content" for="content">
      <TextArea
        @focus="formErrors.content = false"
        @input="data.entry.content = $event.target.value"
        id="content"
        :value="data.entry.content"
        placeholder="Feel free to express in your own way how your day was."
        css="min-h-[42px] scrollbar-none bg-transparent"
        :max="255"
      />
    </Label>
    <ErrorInput
      v-if="formErrors.content"
      text="Content field needs to be filled."
    />
  </div>
  <div class="flex justify-end">
    <Button
      @click.prevent="editEntry"
      textColor="text-white"
      bgColor="bg-blue-500"
      hoverBgColor="hover:bg-blue-600"
      css="w-full sm:w-fit sm:px-10"
    >
      <Icon icon="ri-save-2-fill" />
    </Button>
  </div>
</template>
