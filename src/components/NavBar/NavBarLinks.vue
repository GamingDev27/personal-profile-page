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
      'group font-bodyMedium hover:text-primary-500 text-sm lg:text-base cursor-pointer',
      customClass,
    ]"
  >
    <span class="invisible group-hover:visible">&lt; </span><slot></slot><span class="invisible group-hover:visible"> &gt;</span>
  </li>
</template>

<style></style>
