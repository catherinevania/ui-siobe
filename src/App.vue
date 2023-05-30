<script setup>
import { RouterLink, RouterView } from 'vue-router'
<<<<<<< HEAD
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
=======
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/faculty"></RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
>>>>>>> c8696ed74a13ce9d73f363c635653eb054720bf8
