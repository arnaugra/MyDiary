<script setup>

import { onMounted, reactive, ref } from "vue";

import Icon from '@components/Icon.vue';
import Modal from '@components/Modal.vue';
import Button from '@components/Button.vue';

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry,
  setPaginateNumber,
  getPaginateNumber
} from "@/db.js";

const paginate = ref('Chose a number');
const input = ref(false);

function change(e) {
  console.log(e.target.value);
  if (isNaN(e.target.value)) {
    paginate.value = '';
    input.value = true;
  } else {
    
  }
}


function submit() {
  console.log('' === isNaN(paginate.value));
  if (isNaN(paginate.value)) {
    paginate.value = 'Chose a number';
    input.value = false;
  } else {
    setPaginateNumber(Math.ceil(paginate.value));
    window.location.reload();
  }
}

function backToSelect() {
  input.value = false;
  paginate.value = 'Chose a number';
}

function test(e) {
  if (e.target.value != '') {
    if (1 > e.target.value) paginate.value = 1
    if (e.target.value > 100) paginate.value = 100; 
  }
}

</script>

<template>
    <div class="sm:w-full sm:flex sm:items-center sm:justify-between">
      <div class="flex items-center justify-center gap-2 sm:gap-5">
        <Icon icon="ri-booklet-line" css="text-7xl sm:text-5xl rotate-12" />
        <div class="text-center sm:text-left">
          <h1 class="text-2xl text-start font-bold text-gray-900 sm:text-3xl">
            My Diary!
          </h1>

          <p class="text-sm text-start text-gray-500">
            <span class="block sm:inline-block">Your own personal diary,</span> only on your browser!
          </p>
        </div>
      </div>

      <div class="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:items-center">
        <Modal
          id="settingsForm"
          textColor="text-white"
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-600"
          buttonText="Settings"
          buttonIcon="ri-settings-4-fill text-lg"
          title="Settings"
        >
          <div class="flex flex-col gap-3 sm:w-2/3">
            <div class="flex">
              <div class="w-max whitespace-nowrap mr-3">
                Entries per page: 
              </div>

              <div v-if="input" class="flex gap-3 w-full">
                <input v-model="paginate" type="number" min="1" max="100" class="w-full px-1" placeholder="Min - 1 / Max - 100" @input.prevent="test">
                
                <Button 
                  textColor="text-rose-500 hover:text-rose-900"
                  bgColor="bg-transparent"
                  hoverBgColor="hover:bg-transparent"
                  type="button"
                  css="!p-0 w-min h-[24px]"
                  @click.prevent="backToSelect">
                    <Icon icon="ri-close-circle-fill" css="text-xl"/>
                </Button>
                
                <Button class="!py-0 px-5 w-min" @click.prevent="submit">
                  Save
                </Button>
              </div>

              <div v-else class="flex gap-3 w-full">
                <select v-model="paginate" class="w-full" @change.prevent="change">
                  <option disabled hidden>Chose a number</option>
                  <optgroup label="Defined">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </optgroup>
                  <optgroup label="Custom">
                  </optgroup>
                  <option value="custom">Custom</option>
                </select>
                  <Button class="!py-0 px-5 w-min" @click.prevent="submit">
                    Save
                  </Button>
              </div>

            </div>
          </div>
        </Modal>
      </div>
    </div>
</template>
