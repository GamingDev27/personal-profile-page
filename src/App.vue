<script setup>
import HomeLayout from '@/layouts/HomeLayout.vue'
</script>

<template>
  <HomeLayout> 
    <main class="dark pt-20 bg-background/95 h-full">
      <section class="max-w-6xl mx-auto px-6 py-16">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <!-- Profile Image -->
          <div>
            <img 
              src="https://via.placeholder.com/250" 
              alt="Profile" 
              class="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
            />
          </div>

          <!-- Text Content -->
          <div>
            <h1 class="text-4xl font-bold text-gray-900">John Doe</h1>
            <p class="text-lg text-gray-600 mt-3">
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
      
      <section class="max-w-6xl mx-auto px-6 py-10">
        <h2 class="text-3xl font-semibold mb-6">Skills</h2>
        
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">JavaScript</span>
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Tailwind CSS</span>
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">React</span>
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Node.js</span>
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">Laravel</span>
          <span class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700">MySQL</span>
        </div>
      </section>

      <!-- ===== Projects Section ===== -->
      <section class="max-w-6xl mx-auto px-6 py-16">
        <h2 class="text-3xl font-semibold mb-6">Projects</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project Card -->
          <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
            <div class="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 class="text-xl font-semibold">Project One</h3>
            <p class="text-gray-600 mt-2">A brief description of the project goes here.</p>
            <a href="#" class="text-blue-600 mt-3 inline-block hover:underline">View project →</a>
          </div>

          <!-- Project Card -->
          <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
            <div class="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 class="text-xl font-semibold">Project Two</h3>
            <p class="text-gray-600 mt-2">A brief description of the project goes here.</p>
            <a href="#" class="text-blue-600 mt-3 inline-block hover:underline">View project →</a>
          </div>

          <!-- Project Card -->
          <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5">
            <div class="h-40 bg-gray-200 rounded-lg mb-4"></div>
            <h3 class="text-xl font-semibold">Project Three</h3>
            <p class="text-gray-600 mt-2">A brief description of the project goes here.</p>
            <a href="#" class="text-blue-600 mt-3 inline-block hover:underline">View project →</a>
          </div>
        </div>
      </section>

      <!-- ===== Call to Action ===== -->
      <section class="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 class="text-3xl font-semibold mb-4">Interested in working together?</h2>
        <p class="text-gray-600 mb-6">Let’s create something awesome.</p>
        <a href="#" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Contact Me
        </a>
      </section>
    </main> 
  </HomeLayout>
</template>

<style scoped></style>
