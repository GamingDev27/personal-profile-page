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
      'group font-bodyMedium text-sm lg:text-base cursor-pointer text-accent',
      customClass,
    ]"
  >
  <span class="invisible group-hover:visible text-accent">&lt; </span><slot></slot><span class="invisible group-hover:visible text-accent"> &gt;</span>
  </li>
</template>

<style></style>
