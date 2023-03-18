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
  id: {
    type: String,
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
  console.log(data.entry.content);
  if (!formErrors.title && !formErrors.content) {
    if (data.entry.title === props.entry.title && data.entry.content === props.entry.content) {

      // CAN'T FIND A WAY TO DO THE SHOW MODAL WITH VUE 3 
      document.getElementById(props.id).close();

      emits("openToast", {
        type: 2,
        title: "Nothing to edit",
        body: "Title and content not modified.",
        action: true,
        area: "z-50",
      })
    } else {
      try {
        updateEntry({
          id: props.entry.id,
          date: props.entry.date,
          title: data.entry.title,
          content: data.entry.content,
        })
      
      data.entry.title = ""
      data.entry.content = ""

        // CAN'T FIND A WAY TO DO THE SHOW MODAL WITH VUE 3 
        document.getElementById(props.id).close();

        emits("entryEdited")
        emits("openToast", {
          type: 1,
          title: "Success",
          body: "Entry edited successfully.",
          action: true,
          area: "z-50",
        })
      } catch (error) {
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
}

</script>

<template>
  <div class="mb-3">
    <Label :text="$t('form.title')" for="title">
      <InputText @focus="formErrors.title = false" @input="data.entry.title = $event.target.value" id="title"
        css="bg-transparent" :value="data.entry.title" :placeholder="$t('form.titlePlaceholder')" :max="50"
        :focus="true" />
    </Label>
    <ErrorInput v-if="formErrors.title" :text="$t('form.titleError')" />
  </div>
  <div class="mb-3">
    <Label :text="$t('form.content')" for="content">
      <TextArea @focus="formErrors.content = false" @input-value="data.entry.content = $event" id="content"
        :value="data.entry.content" :placeholder="$t('form.contentPlaceholder')"
        css="min-h-[42px] scrollbar-none bg-transparent" />
    </Label>
    <ErrorInput v-if="formErrors.content" :text="$t('form.contentError')" />
  </div>
  <div class="flex justify-end">
    <Button @click.prevent="editEntry" textColor="text-white" bgColor="bg-blue-500" hoverBgColor="hover:bg-blue-600"
      css="w-full sm:w-fit sm:px-10">
      <Icon icon="ri-save-2-fill" />
    </Button>
  </div>
</template>
