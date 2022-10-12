<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="flex  w-screen h-screen bg-slate-700">
    <Navbar  class="flex-auto w-60"/>
    <RouterView class="flex-auto w-full h-full"/>
    
  </div>
</template>

<style scoped>
</style>
