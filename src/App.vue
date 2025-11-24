<script setup>
import HomeLayout from '@/layouts/HomeLayout.vue'
import Profile from './components/Profile.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <HomeLayout> 
    <main class="bg-background/95 pt-20 h-full dark">
      
      <Profile />

      <Skills />

      <Skills />
      
      <Projects />
      

      <!-- ===== Call to Action ===== -->
      <section class="mx-auto px-6 py-20 max-w-6xl text-center">
        <h2 class="mb-4 font-semibold text-3xl">Interested in working together?</h2>
        <p class="mb-6 text-gray-600">Let’s create something awesome.</p>
        <a href="#" class="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition">
          Contact Me
        </a>
      </section>
    </main> 
  </HomeLayout>
</template>

<style scoped></style>
