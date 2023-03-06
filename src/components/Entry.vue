<script setup>
import { reactive, ref } from "vue";

import Button from "@components/Button.vue";
import Icon from "@components/Icon.vue";
import Modal from "@components/Modal.vue";
import EditForm from "@components/Forms/EditForm.vue";

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry,
} from "@/db.js";

const props = defineProps({
  entry: {
    type: Object,
  },
  index: {
    type: Number,
  },
  start: {
    type: Number,
  },
});

const emits = defineEmits(["openToast", "entryDeleted", "entryEdited"]);

const timeline = {
  month: "",
  year: "",
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Gets the month of the date and sets it to the timeline.month
 * @param {Date} date 
 */
function timeLineMonth(date) {
  timeline.month = months[new Date(date).getMonth()];
}

/**
 * Gets the year of the date and sets it to the timeline.year
 * @param {Date} date 
 */
function timeLineYear(date) {
  timeline.year = new Date(date).getFullYear();
}

/**
 * Returns the date in the format of dd/mm/yyyy
 * @param {Date} date 
 */
function getDate(date) {
  return (
    (date.getDate() < 10
      ? "0" + (date.getDate())
      : date.getDate())  +
    " / " +
    (months[date.getMonth()]) +
    " / " +
    date.getFullYear()
  );
}

/**
 * Deletes an entry from the database by id
 * @param {Number} id 
 */
function deleteEntry(id) {
    destroyEntry(id)
      .then(() => {
        emits("openToast", {
          type: 1,
          title: "Success",
          body: "Entry deleted successfully.",
          action: true,
          area: "z-50",
        });
        emits("entryDeleted");
      })
      .catch((err) => {
        console.log(err);
        emits("openToast", {
          type: 3,
          title: "Success",
          body: "Error.",
          action: true,
          area: "z-50",
        });
      });
}

</script>

<template>
        <!-- <div v-if="
          new Date(props.entry.date).getMonth() == new Date().getMonth() &&
          new Date(props.entry.date).getFullYear() == new Date().getFullYear()"></div>
      <div v-else-if="
          months[new Date(props.entry.date).getMonth()] != timeline.month ||
          (new Date(props.entry.date).getMonth() != new Date().getMonth() &&
          new Date(props.entry.date).getFullYear() != new Date().getFullYear() &&
          new Date(props.entry.date).getFullYear() != timeline.year)">
        <p class="text-lg sm:text-2xl font-semibold text-slate-700 pt-0 pb-0"
        :class="props.index === props.start ? 'pt-3' : 'pt-0'">
          {{ months[new Date(props.entry.date).getMonth()] }}
          <span v-if="new Date(props.entry.date).getFullYear() != new Date().getFullYear()">
            - {{ new Date(props.entry.date).getFullYear() }}
          </span>
        </p>
      </div>
      {{ timeLineMonth(props.entry.date) }}
      {{ timeLineYear(props.entry.date) }} -->
      <div>
        <details class="group [&_summary::-webkit-details-marker]:hidden my-3 rounded-lg bg-slate-100 drop-shadow-lg" :open="props.index === props.start">
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-slate-200" >
            <h2 class="font-medium text-slate-800">
              {{ getDate(props.entry.date) }} - <p class="inline-block first-letter:uppercase font-bold">{{ props.entry.title }}</p> 
            </h2>
            <i class="ri-arrow-up-s-line text-2xl transition duration-300 group-open:rotate-180"></i>
          </summary>
          
          <p class="tiptap px-4 pt-4 leading-relaxed text-slate-700" v-html="props.entry.content" >
          </p>


          <div class="flex justify-end">

            <Modal
            :id="'edit-modal'+props.index"
            textColor="text-blue-500 hover:text-blue-900"
            bgColor="bg-transparent"
            hoverBgColor="hover:bg-transparent"
            buttonIcon="ri-pencil-fill"
            openCss="group p-4 !w-fit"
            >
              <EditForm 
              :id="'edit-modal'+props.index"
              :entry="props.entry"
              @open-toast="emits('openToast', $event)"
              @entry-edited="emits('entryEdited')" />
            </Modal>

            <Button 
            textColor="text-rose-500 hover:text-rose-900"
            bgColor="bg-transparent"
            hoverBgColor="hover:bg-transparent"
            type="button"
            css="group p-4 !w-fit"
            @click="deleteEntry(props.entry.id)">
              <Icon icon="ri-delete-bin-6-fill"/>
          </Button>
        
      </div>
      

        </details>
      </div>
</template>
