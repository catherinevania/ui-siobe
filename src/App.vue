<script setup>
<<<<<<< HEAD
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <link href="/dist/output.css" rel="stylesheet" />
 
  <RouterView />
=======
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
  
>>>>>>> 8fafc0970eb2c074b905727913dfe51bfa0d5fd5
</template>

<style scoped>
</style>
</script>