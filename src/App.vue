<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
<<<<<<< HEAD
	<header>
		<link href="/dist/output.css" rel="stylesheet">
		<div class="wrapper">
      <Navbar />
		</div>
	</header>
	<RouterView />
</template>
=======
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
>>>>>>> ff0d419ff7e828e89b1134ce75f448ce6dff6956
