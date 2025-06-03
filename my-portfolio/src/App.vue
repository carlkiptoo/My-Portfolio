<!-- <script setup lang="ts">
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template> -->

<template>
  <div>
    <NavBar />
    <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="work"><Work /></section>
    <section id="gallery"><Gallery /></section>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Home from './pages/HomePage.vue';
import About from './pages/AboutMe.vue';
import Work from './pages/MyWork.vue';
import Gallery from './pages/MyGallery.vue';
</script>
