<script setup>
import NavBar from '@/components/NavBar/NavBar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <slot></slot>
  
  <footer>
    <Footer />
  </footer>
</template>



<style>

</style>