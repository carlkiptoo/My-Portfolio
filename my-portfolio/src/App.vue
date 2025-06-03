
<template>
  <div>
    <NavBar />
    <section id="home"><Home /></section>
    <SectionDivider type="gradient" spacing="small" />
    <section id="about"><About /></section>
    <SectionDivider type="gradient" spacing="small" />
    <section id="work"><Work /></section>
    <SectionDivider type="gradient" spacing="small" />
    <section id="gallery"><Gallery /></section>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Home from './pages/HomePage.vue';
import About from './pages/AboutMe.vue';
import Work from './pages/MyWork.vue';
import Gallery from './pages/MyGallery.vue';
import SectionDivider from './components/SectionDivider.vue';
</script>
