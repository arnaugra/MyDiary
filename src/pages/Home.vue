<script setup>
import AddForm from "@components/Forms/AddForm.vue";

import Entry from "@components/Entry.vue";
import Modal from "@components/Modal.vue";
import Loader from "@components/Loader.vue";
import Toast from "@components/Toast.vue";

import Button from "@components/Button.vue";

import Icon from "@components/Icon.vue";

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry,
} from "../db.js";

import { reactive, ref } from "vue";

// #region Toasts test
const toastControl = reactive({
  type: 1,
  title: "Title",
  body: "Body",
  action: false,
  area: "-z-50",
});

/**
 * 
 * @param {Object} toast object with the toast data to close it.
 */
function toastClose(toast) {
  toastControl.action = toast.action
  setTimeout(() => toastControl.area = toast.area, 500);
}

function toastOpen(toast) {
  toastControl.area = toast.area
  toastControl.type = toast.type
  toastControl.title = toast.title
  toastControl.body = toast.body
  toastControl.action = toast.action
}

// #endregion Toasts test

let entries = ref("no entries");

const paginate = reactive({
  page: 1,
  perPage: 1,
  firstIndex: 0,
  lastIndex: 0,
  total: 0,
  totalPages: 0,
});

function pageup() {
  paginate.page++;
      paginate.firstIndex = (paginate.page - 1) * paginate.perPage;
      paginate.lastIndex = paginate.firstIndex + paginate.perPage;

      paginate.total = entries.value.length;
      paginate.totalPages = Math.ceil(paginate.total / paginate.perPage);
}

function pagedown() {
  paginate.page--;
      paginate.firstIndex = (paginate.page - 1) * paginate.perPage;
      paginate.lastIndex = paginate.firstIndex + paginate.perPage;

      paginate.total = entries.value.length;
      paginate.totalPages = Math.ceil(paginate.total / paginate.perPage);
}

/**
 * Get all entries from the database and store them in the entries ref array.
 */
function updateEntries() {
  getAllEntries()
    .then((data) => {
      entries.value = data.reverse()
      
      paginate.page = 1;
      paginate.perPage = import.meta.env.DEV ? 3 : 10;
      paginate.firstIndex = (paginate.page - 1) * paginate.perPage;
      paginate.lastIndex = paginate.firstIndex + paginate.perPage;

      paginate.total = entries.value.length;
      paginate.totalPages = Math.ceil(paginate.total / paginate.perPage);
    })
    .catch((error) => {
      console.warn(error);
    });
}


// #region Setup App

updateEntries();

// #endregion Setup App

</script>

<template>
  <Modal id="addForm" textColor="text-white" bgColor="bg-slate-600" hoverBgColor="hover:bg-slate-700"
    buttonText="Add Entry" buttonIcon="ri-add-circle-line text-lg">
    <AddForm id="addForm" @new-entry="updateEntries" @open-toast="toastOpen" />
  </Modal>

  <div>
    <Loader v-if="entries === 'no entries'" icon="ri-bubble-chart-fill" animation1="animate-bounce"
      animation2="animate-spin duration-[5000ms]" css="text-5xl  text-slate-700" />
    <div v-else>
      <div v-if="entries.length === 0" class="flex justify-center mt-3 p-3 bg-slate-200 rounded-md">
        <p class="text-md font-semibold text-slate-700 pt-0 pb-0">
          No entries yet
        </p>
      </div>
      <div v-else>
        <div v-for="(entry, i) in entries">
          <Entry v-if="i >= paginate.firstIndex && i < paginate.lastIndex"
            @open-toast="toastOpen"
            @entry-deleted="updateEntries"
            @entry-edited="updateEntries"
            :entry="entry"
            :index="i"
            :start="paginate.firstIndex" />
        </div>
        <div v-if="entries.length > paginate.perPage" class="flex justify-evenly pt-3 rounded-md md:m-auto md:w-96">

<Button @click="pagedown" :disabled="paginate.page === 1" bgColor="bg-slate-600"
  hoverBgColor="hover:bg-slate-700" textColor="text-white" hoverTextColor="hover:text-white" css="!w-1/3">
  <Icon icon="ri-arrow-left-s-line" />
</Button>

<div class="self-center text-md text-center font-semibold text-slate-700 py-0 w-1/3">
  {{ paginate.firstIndex + 1 }} - {{ paginate.lastIndex }} of {{ paginate.total }}
</div>

<Button @click="pageup" :disabled="paginate.page === paginate.totalPages" bgColor="bg-slate-600"
  hoverBgColor="hover:bg-slate-700" textColor="text-white" hoverTextColor="hover:text-white" css="!w-1/3">
  <Icon icon="ri-arrow-right-s-line" />
</Button>

</div>
      </div>
    </div>
  </div>

  <div class="fixed bottom-0 right-0 w-full sm:w-[460px] p-5 " :class="toastControl.area">
    <Toast :type="toastControl.type" :title="toastControl.title" :body="toastControl.body" :action="toastControl.action"
      :v-model="toastControl.action" @close-toast="toastClose" />
  </div>
</template>
