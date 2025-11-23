<script setup>
</script>

<template>
  <section class="mx-auto px-6 py-16 max-w-6xl">
    <div class="flex md:flex-row flex-col items-center gap-10">
      <!-- Profile Image -->
      <div>
        <img 
          src="https://via.placeholder.com/250" 
          alt="Profile" 
          class="shadow-lg rounded-full w-48 md:w-56 h-48 md:h-56 object-cover"
        />
      </div>

      <!-- Text Content -->
      <div>
        <h1 class="font-bold text-primary text-4xl">John Doe</h1>
        <p class="mt-3 text-gray-600 text-lg">
          Full-Stack Developer passionate about building intuitive, scalable, and elegant digital experiences.
        </p>

        <!-- Socials -->
        <div class="flex gap-4 mt-4">
          <a href="#" class="text-gray-500 hover:text-blue-600 transition">GitHub</a>
          <a href="#" class="text-gray-500 hover:text-blue-500 transition">LinkedIn</a>
          <a href="#" class="text-gray-500 hover:text-red-500 transition">Email</a>
        </div>
      </div>
    </div>
  </section>
</template>


<style>

</style>