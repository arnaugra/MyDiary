<script setup>
import Button from '@components/Button.vue';
import Icon from '@components/Icon.vue';
import Label from '@components/Label.vue';

import {
  addEntry,
  getEntry,
  getAllEntries,
  updateEntry,
  destroyEntry,
  setPaginateNumber,
  getPaginateNumber,
  setLanguage,
  getLanguage,
} from "@/db.js";

import { onBeforeMount } from 'vue';
import axios from 'axios';

import { ref } from 'vue';

import { useI18n } from "vue-i18n";

const time = ref();
const errorUpload = ref(false);
const downloadFile = ref(false);

function generateFile() {
  time.value = momentFileCreated();
  getAllEntries()
    .then((entries) => {

      if (downloadFile.value) {
        const blob = new Blob([JSON.stringify({ entries, lang: getLanguage(), paginate: getPaginateNumber() })], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.setAttribute('download', `my-diary-backup_${time.value}.json`);
        tempLink.click();
        tempLink.remove();

      }
      downloadFile.value = true;

    });
}

function momentFileCreated() {
  return new Date().toLocaleString('es', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).replaceAll('/', '-').replaceAll(':', '-').replaceAll(', ', '_');
}

function download() {
  generateFile();
}

onBeforeMount(() => {
  generateFile();
});

function test(e) {
  errorUpload.value = false;
  let goodOne;
  for (const iterator of e.target.files) {
    if (/^my-diary-backup_\d{2}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}\.json$/.test(iterator.name)) {
      goodOne = iterator
      break
    }
  }
  if (goodOne) {
    const lector = new FileReader();
    lector.readAsText(goodOne);
    lector.addEventListener('load', () => {
      const contenido = lector.result;
      // console.log(contenido);

      const { entries, lang, paginate } = JSON.parse(contenido);

      setPaginateNumber(paginate);
      setLanguage(lang);

      entries.forEach((entry) => {
        entry.date = new Date(entry.date);
        let exist = false;
        getEntry(entry.uid)
          .then(() => {
            console.log('update');
            updateEntry(entry);
          })
          .catch(() => {
            console.log('add');
            addEntry(entry);
          });
      });

    });
    location.reload()
  } else {
    errorUpload.value = true;
  }
}


</script>

<template>
  <div class="flex justify-between gap-7">
    <div class="text-rose-600">
      {{ $t('settings.backup.download') }}
    </div>

    <div class="w-fit">
      <Button class="!py-1 w-48" bgColor="bg-rose-700" hoverBgColor="hover:bg-rose-800" @click.prevent="download">
        {{ $t('settings.backup.button_D') }}
      </Button>
    </div>
  </div>
  <div class="flex justify-between gap-7">
    <div class="text-rose-600">
      {{ $t('settings.backup.upload') }}
    </div>

    <div class="w-fit">
        <input type="file" class="hidden" ref="upload_backup" @change="test">
        <Button 
          class="!py-1 w-48"
          bgColor="bg-rose-700"
          hoverBgColor="hover:bg-rose-800"
          @click.prevent="$refs.upload_backup.click()">
          {{ $t('settings.backup.button_U') }}
        </Button>
        <p 
          v-if="errorUpload"
          class="w-full text-center font-semibold"
        >
          {{ $t('settings.backup.error_U') }}
        </p>
    </div>
  </div>
</template>
