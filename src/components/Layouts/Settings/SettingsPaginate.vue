<script setup>
import Button from '@components/Button.vue';
import Icon from '@components/Icon.vue';

import { ref } from 'vue';

import { setPaginateNumber } from "@/db.js";

const paginate = ref('Choose a number');
const input = ref(false);

function change(e) {
  if (isNaN(e.target.value)) {
    paginate.value = '';
    input.value = true;
  } else {
    
  }
}


function submit() {
  if (isNaN(paginate.value)) {
    paginate.value = 'Choose a number';
    input.value = false;
  } else {
    setPaginateNumber(Math.ceil(paginate.value));
    window.location.reload();
  }
}

function backToSelect() {
  input.value = false;
  paginate.value = 'Choose a number';
}

function customNumbers(e) {
  if (e.target.value != '') {
    if (1 > e.target.value) paginate.value = 1
    if (e.target.value > 100) paginate.value = 100; 
  }
}
</script>

<template>
<div class="flex flex-col gap-3 sm:w-2/3">
            <div class="flex flex-col md:flex-row">
              <div class="w-max whitespace-nowrap mr-3">
                {{ $t('settings.paginate.question') }}
              </div>

              <div v-if="input" class="flex gap-3 w-full">
                <input v-model="paginate" type="number" min="1" max="100" class="w-full px-1" :placeholder="$t('settings.paginate.select.customNumbers')" @input.prevent="test">
                
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
                  {{ $t('actions.save') }}
                </Button>
              </div>

              <div v-else class="flex gap-3 w-full">
                <select v-model="paginate" class="w-full" @change.prevent="change">
                  <option disabled hidden value="Choose a number">{{ $t('settings.paginate.chooseANumber') }}</option>
                  <optgroup :label="$t('settings.paginate.select.defined')">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </optgroup>
                  <optgroup :label="$t('settings.paginate.select.custom')">
                  </optgroup>
                  <option value="custom">{{ $t('settings.paginate.select.custom') }}</option>
                </select>
                  <Button class="!py-0 px-5 w-min" @click.prevent="submit">
                  {{ $t('actions.save') }}
                  </Button>
              </div>

            </div>
          </div>
</template>
