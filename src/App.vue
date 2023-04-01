<script setup>

import  { debugLog } from './db.js'
import { ref } from 'vue';
import Layout from '@components/Layouts/Layout.vue'
import Home from '@pages/Home.vue'

debugLog("DEBUG_ON");
// if (!import.meta.env.DEV) {
//   console.group(
//     "%cHi dev!",
//     "font-size: 1.5em; font-weight: bold"
//   )
//   console.log(
//     "%cIf you are interested on add a feature or fix a bug, here is the repository:",
//     "font-size: 1.2em; font-weight: bold"
//   )
//   console.log("👇")
//   console.log(
//     "%chttps://github.com/arnaugra/MyDiary/tree/dev",
//     "font-size: 1.2em; font-weight: bold; background-color: cornFlowerBlue; text-decoration: underline; cursor: pointer; padding: 0.25em 1em; border-radius: 0.5em;"
//   )
//   console.groupEnd()
// }

</script>

<template>
  <!-- <p>{{ $t('hello') }}</p> ejemplo -->
  <Layout>
    <Home />
  </Layout>
</template>