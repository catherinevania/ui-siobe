<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
</script>

<template>
	<header>
		<link href="/dist/output.css" rel="stylesheet">
		<div class="wrapper">
      <Navbar />
		</div>
	</header>
	<RouterView />
</template>