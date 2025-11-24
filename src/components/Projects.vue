<script setup>
import ProjectCard from '@/components/Projects/ProjectCard.vue';
</script>

<template>
    <!-- ===== Projects Section ===== -->
      <section class="mx-auto px-6 py-16 max-w-6xl">
        <h2 class="mb-6 font-semibold text-3xl">Projects</h2>

        <div class="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          
          <ProjectCard />  
          
          <ProjectCard />  

          <ProjectCard />  

        </div>
      </section>
</template> 

<style scoped></style>