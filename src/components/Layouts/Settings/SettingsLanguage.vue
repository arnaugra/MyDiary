<script setup>
import Button from '@components/Button.vue';
import Icon from '@components/Icon.vue';

import { ref } from 'vue';

import { setLanguage } from "@/db.js";

import { useI18n } from "vue-i18n";

const language = ref('Choose a language');

function submit() {
  if (language.value != 'Choose a language') {
    setLanguage(language.value);
    window.location.reload();
  }
}
const currentLanguage = useI18n().locale.value;

</script>

<template>
<div class="flex flex-col gap-3 sm:w-2/3">
            <div class="flex flex-col md:flex-row">
              <div class="w-max whitespace-nowrap mr-3">
                {{ $t('settings.language.question') }}
              </div>

              <div class="flex gap-3 w-full">
                <select v-model="language" class="w-full">
                  <option disabled hidden value="Choose a language">{{ $t('settings.language.chooseALanguage') }}</option>
                  <template
                    v-for="lang in Object.keys($tm('anotherLanguages'))"
                  >
                    <option v-if="$t('anotherLanguages.'+lang+'.short') != currentLanguage" :value="$t('anotherLanguages.'+lang+'.short')">{{ $t('anotherLanguages.'+lang+'.short') }} - {{ $t('anotherLanguages.'+lang+'.language') }} </option>

                  </template>
                </select>
                  <Button class="!py-0 px-5 w-min" @click.prevent="submit">
                  {{ $t('actions.save') }}
                  </Button>
              </div>

            </div>
          </div>
</template>
