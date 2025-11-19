<script setup>
import NavBarLinks from './NavBarLinks.vue';
</script>

<template>
  <nav class="top-0 z-20 fixed bg-primary-900 pt-12 pb-4 w-full">
    <div class="flex justify-between mx-auto text-slate-100 container">
      <span class="flex-1 text-[#FF6185]">DXpresso</span>
      <ul class="flex flex-1 justify-between">
        <NavBarLinks>About</NavBarLinks>
        <NavBarLinks>Experience</NavBarLinks>
        <NavBarLinks>Projects</NavBarLinks>
        <NavBarLinks>Contact</NavBarLinks>
      </ul>
    </div>
  </nav>
</template>

<style></style>
