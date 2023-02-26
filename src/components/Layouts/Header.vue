<script setup>

import { ref } from 'vue';

import Icon from '@components/Icon.vue';
import Button from '@components/Button.vue';
import Modal from '@components/Modal.vue';

const showModalSettings = ref(false);

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
        >
          Settings Modal
        </Modal>
      </div>
    </div>
</template>
