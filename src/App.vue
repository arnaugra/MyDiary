<script setup>

import  { debugLog } from './db.js'
import { ref } from 'vue';
import Layout from '@components/Layouts/Layout.vue'
import Home from '@pages/Home.vue'

debugLog("DEBUG_ON");

</script>

<template>
  <Layout>
    <Home />
  </Layout>
</template>