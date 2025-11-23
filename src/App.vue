<script setup>
import HomeLayout from '@/layouts/HomeLayout.vue'
import Profile from './components/profile.vue';
</script>

<template>
  <HomeLayout> 
    <main class="bg-background/95 pt-20 h-full dark">
      
      <Profile />

      <Skills />

      <Skills />
      <section class="mx-auto px-6 py-10 max-w-6xl">
        <h2 class="mb-6 font-semibold text-3xl">Skills</h2>
        
        <div class="flex flex-wrap gap-3">
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">JavaScript</span>
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">Tailwind CSS</span>
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">React</span>
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">Node.js</span>
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">Laravel</span>
          <span class="bg-gray-100 px-4 py-2 rounded-lg text-gray-700">MySQL</span>
        </div>
      </section>

      <!-- ===== Projects Section ===== -->
      <section class="mx-auto px-6 py-16 max-w-6xl">
        <h2 class="mb-6 font-semibold text-3xl">Projects</h2>

        <div class="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Project Card -->
          <div class="bg-white shadow hover:shadow-lg p-5 rounded-xl transition">
            <div class="bg-gray-200 mb-4 rounded-lg h-40"></div>
            <h3 class="font-semibold text-xl">Project One</h3>
            <p class="mt-2 text-gray-600">A brief description of the project goes here.</p>
            <a href="#" class="inline-block mt-3 text-blue-600 hover:underline">View project →</a>
          </div>

          <!-- Project Card -->
          <div class="bg-white shadow hover:shadow-lg p-5 rounded-xl transition">
            <div class="bg-gray-200 mb-4 rounded-lg h-40"></div>
            <h3 class="font-semibold text-xl">Project Two</h3>
            <p class="mt-2 text-gray-600">A brief description of the project goes here.</p>
            <a href="#" class="inline-block mt-3 text-blue-600 hover:underline">View project →</a>
          </div>

          <!-- Project Card -->
          <div class="bg-white shadow hover:shadow-lg p-5 rounded-xl transition">
            <div class="bg-gray-200 mb-4 rounded-lg h-40"></div>
            <h3 class="font-semibold text-xl">Project Three</h3>
            <p class="mt-2 text-gray-600">A brief description of the project goes here.</p>
            <a href="#" class="inline-block mt-3 text-blue-600 hover:underline">View project →</a>
          </div>
        </div>
      </section>

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
