<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <nav class="w-full mx-auto max-w-screen-xl px-5 pt-8 pb-4 sm:py-12 sm:px-6 lg:px-8">
    <Header />
  </nav>
  <main class="mb-auto w-full mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8">
    <slot />
  </main>
  <footer class="bg-zinc-100 mt-8 w-full">
    <div class="flex flex-col lg:flex-row mx-auto max-w-screen-xl px-5 pt-8 pb-4 sm:py-12 sm:px-6 lg:px-8">
      <Footer />
    </div>
  </footer>
</template>
