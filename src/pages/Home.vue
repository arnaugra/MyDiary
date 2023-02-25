<script setup>
import AddForm from "@components/Forms/AddForm.vue";

import Entries from "@components/Entries.vue";
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

const showModalAddForm = ref(false);


let entries = ref("no entries");

/**
 * Get all entries from the database and store them in the entries ref array.
 */
function updateEntries() {
  getAllEntries()
    .then((data) => {
      entries.value = data.reverse()
    })
    .catch((error) => {
      console.warn(error);
    });
}


// #region Setup App

updateEntries();

// #endregion Setup App




function test1() {
  let test = document.getElementById("test")
  test.showModal();
  console.log('estoy aquí', test);
}

function test2() {
  let test = document.getElementById("test")
  test.close();
  console.log('estoy aquí', test);
}

</script>

<template>

<div id="testabre" @click="test1">abre</div>

<dialog id="test"  class="backdrop:bg-red-200 backdrop:opacity-50 ">
  <p>hola</p>
  <div id="testcierra" @click="test2">cierra</div>
</dialog>

  <Modal
    textColor="text-white"
    bgColor="bg-slate-600"
    hoverBgColor="hover:bg-slate-700"
    buttonText="Add Entry"
    buttonIcon="ri-add-circle-line text-lg"
    :show="showModalAddForm"
    @open-modal="showModalAddForm = true"
    @close-modal="showModalAddForm = false"
  >
    <AddForm
      @close-modal="()=> {
        showModalAddForm = false
        updateEntries()
      }"
      @open-toast="toastOpen"
      />
  </Modal>

  <div>
  <Loader v-if="entries === 'no entries'"
    icon="ri-bubble-chart-fill"
    animation1="animate-bounce"
    animation2="animate-spin duration-[5000ms]"
    css="text-5xl  text-slate-700"
  />
  <div v-else>
    <div v-if="entries.length === 0" class="flex justify-center mt-3 p-3 bg-slate-200 rounded-md">
      <p class="text-md font-semibold text-slate-700 pt-0 pb-0">
        No entries yet
      </p>
    </div>
    <div v-else>
      <div v-for="(entry, i) in entries">
        <Entries
        @open-toast="toastOpen"
        @entry-deleted="updateEntries"
        @entry-edited="updateEntries"
        :entry="entry"
        :index="i"
        />
      </div>
    </div>
  </div>
  </div>

  <div class="fixed bottom-0 right-0 w-full sm:w-[460px] p-5 " :class="toastControl.area">
    <Toast
      :type="toastControl.type"
      :title="toastControl.title"
      :body="toastControl.body"
      :action="toastControl.action"
      :v-model="toastControl.action"
      @close-toast="toastClose"
    />
  </div>
</template>