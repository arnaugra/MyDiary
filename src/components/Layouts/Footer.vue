<script setup>
import Details from "../Details.vue";
import Icon from "../Icon.vue";

const FAQ = {
  1: {
    title: "Whats the pourpose of this site?",
    content:
      "All started because I was trying new technologies, and quite further I had this idea, and I already got on track.",
  },
  2: {
    title: "How safe is my data?",
    content:
      "All your input data will be stored in your own device, nothing will be stored on the cloud.",
  },
  3: {
    title: "How many entries can I fill in?",
    content:
      "It can store up to 255MB, I can't tell how many entries these are.",
  },
};
</script>

<template>
  <div class="w-full px-5 order-3 lg:order-1">
    <p class="text-xl font-bold m-3 ml-0">FAQ</p>
    <div class="lg:max-h-28 scrollbar scrollbar-w-1 scrollbar-thumb-rounded-lg scrollbar-thumb-zinc-600 sm:pr-2 overflow-scroll overflow-x-hidden flex flex-col gap-2"
    >
      <Details
        v-for="step in FAQ"
        :title="step.title"
        :content="step.content"
      />
    </div>
  </div>
  <div class="w-full px-5 order-1 lg:order-2">
    <p class="text-xl font-bold m-3 ml-0">My Diary!</p>
    <div class=" flex flex-col justify-between">
      <div class="text-sm flex flex-col gap-1">
        <p>
          Simple app to keep track of your days, without carrying a
          notebook, and without uploading your stories to the cloud, all on your
          device!
        </p>
        <p>
          It started as a project to learn Vue 3, and I thought it can be useful for somebody.
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
