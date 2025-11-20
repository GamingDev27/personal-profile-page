<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <li
    :class="[
      'group font-bodyMedium text-sm lg:text-base cursor-pointer text-card-foreground',
      customClass,
    ]"
  >
  <span class="invisible group-hover:visible text-sidebar-primary">&lt; </span><slot></slot><span class="invisible group-hover:visible text-sidebar-primary "> &gt;</span>
  </li>
</template>

<style></style>
