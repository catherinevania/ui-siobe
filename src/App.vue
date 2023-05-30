<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="wrapper">
      <RouterView />
    </div>
  </div>
  
</template>

<style scoped>
</style>
</script>