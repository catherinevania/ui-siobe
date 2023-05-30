<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
    <link href="/dist/output.css" rel="stylesheet" />

  <div class="container">
    <Navbar />
    <div class="wrapper">
      <RouterView />
    </div>
  </div>
  
</template>

<style scoped>
</style>