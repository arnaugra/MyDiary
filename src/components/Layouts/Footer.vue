<script setup>
import { useI18n } from "vue-i18n";
import Details from "../Details.vue";
import Icon from "../Icon.vue";

</script>

<template>
  <div class="w-full px-5 order-3 lg:order-1">
    <p class="text-xl font-bold m-3 ml-0">{{ $t('footerFAQ.title') }}</p>
    <div class="lg:max-h-40 scrollbar scrollbar-w-1 scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-600 sm:pr-2 overflow-scroll overflow-x-hidden flex flex-col gap-2"
    >
    <template
      v-for="step in Object.keys($tm('footerFAQ.questions'))"
    >
      <Details
      :title="$t('footerFAQ.questions.' + step + '.question')"
      :content="$t('footerFAQ.questions.' + step + '.answer')"
      />
    </template>
    </div>
  </div>
  <div class="w-full px-5 order-1 lg:order-2">
    <p class="text-xl font-bold m-3 ml-0">My Diary!</p>
    <div class=" flex flex-col justify-between">
      <div class="text-sm flex flex-col gap-1">
        <p>
          {{ $t('footerDescription.description1') }}
        </p>
        <p>
          {{ $t('footerDescription.description2') }}
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="w-full px-5 order-2 lg:order-3">
    <p class="text-xl font-bold m-3 ml-0">Dev</p>
      <div class="flex justify-start gap-3">
        <fieldset class="flex justify-around w-fit">
          <legend class="text-md px-2">Repository</legend>
          <a class="p-2" href="https://github.com/arnaugra/MyDiary" target="_blank">
            <Icon icon="ri-github-fill" css="text-2xl rounded-full text-slate-800 hover:text-slate-400 hover:bg-slate-800 " />
          </a>
        </fieldset>
           Add contributors when upload on github and have contributors
          <div class="self-center">
            <Icon icon="ri-arrow-right-line" css="text-2xl rounded-full text-slate-800 hover:text-slate-400 hover:bg-slate-800 " />
        </div>
        <fieldset class="flex items-center w-fit">
          <legend class="text-md px-2">Contributors</legend>
          <dev>
            <a class="p-2" href="https://github.com/arnaugra" target="_blank">
              <Icon icon="ri-github-fill" css="text-2xl rounded-full text-slate-800 hover:text-slate-400 hover:bg-slate-800 " />
            </a>
          </dev>
        </fieldset>
      </div>
  </div> -->
</template>
