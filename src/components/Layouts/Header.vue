<script setup>

import { onMounted, reactive, ref } from "vue";

import Icon from '@components/Icon.vue';
import Modal from '@components/Modal.vue';
import Button from '@components/Button.vue';
import SettingsPaginate from '@components/Layouts/Settings/SettingsPaginate.vue';
import SettingsLanguage from '@components/Layouts/Settings/SettingsLanguage.vue';

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry,
  setPaginateNumber,
  getPaginateNumber
} from "@/db.js";


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
            <span class="block sm:inline-block">{{ $t("slogan.sloganPart1") }}</span> {{ $t("slogan.sloganPart2") }}
          </p>
        </div>
      </div>

      <div class="mt-4 flex flex-col sm:mt-0 sm:flex-row sm:items-center">
        <Modal
          id="settingsForm"
          textColor="text-white"
          bgColor="bg-blue-500"
          hoverBgColor="hover:bg-blue-600"
          :buttonText="$t('settings.settings')"
          buttonIcon="ri-settings-4-fill text-lg"
          :title="$t('settings.settings')"
        >
        <div class="w-full flex flex-col gap-3">
          <SettingsLanguage />
          
          <SettingsPaginate/>
        </div>
        </Modal>
      </div>
    </div>
</template>
