<script setup>

import { reactive, ref } from "vue"

import { addEntry, getAllEntries } from "@/db.js"

import Label from "@components/Label.vue"
import InputText from "@components/InputText.vue"
import TextArea from "@components/TextArea.vue"
import Button from "@components/Button.vue"
import Icon from "@components/Icon.vue"
import ErrorInput from "@components/ErrorInput.vue"

const props = defineProps({
  id: {
    type: String,
  },
})

const emits = defineEmits(["newEntry", "openToast"])

const formErrors = reactive({
  title: false,
  content: false,
})

const data = reactive({
  entry: {
    title: "",
    content: "",
  },
})

/**
 * Adds a new entry to the database
 */
function newEntry() {
  if (data.entry.title === "") formErrors.title = true
  if (data.entry.content === "") formErrors.content = true
  if (data.entry.title !== "" && data.entry.content !== "") {
    try {
      addEntry({
        date: new Date(),
        title: data.entry.title,
        content: data.entry.content,
      })
      
      data.entry.title = ""
      data.entry.content = ""

      // CAN'T FIND A WAY TO DO THE SHOW MODAL WITH VUE 3
      document.getElementById(props.id).close();
  
      emits("newEntry")
      emits("openToast", {
        type: 1,
        title: "Success",
        body: "Entry added successfully.",
        action: true,
        area: "z-50",
      })
    } catch (error) {
      emits("newEntry")
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
        @input-value="data.entry.content = $event"
        id="content"
        :value="data.entry.content"
        placeholder="Feel free to express in your own way how your day was."
        css="scrollbar-none bg-transparent"
      />
    </Label>
    <ErrorInput
      v-if="formErrors.content"
      text="Content field needs to be filled."
    />
  </div>
  <div class="flex justify-end">
    <Button
      @click.prevent="newEntry"
      textColor="text-white"
      bgColor="bg-blue-500"
      hoverBgColor="hover:bg-blue-600"
      css="w-full sm:w-fit sm:px-10"
    >
      <Icon icon="ri-save-2-fill" />
    </Button>
  </div>
</template>
