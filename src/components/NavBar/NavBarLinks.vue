<script setup>
const props = defineProps({
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="[
      'font-primary text-neutral-light hover:text-accent tracking-wide cursor-pointer w-auto',
      customClass,
    ]"
  >
    <slot></slot>
  </div>
</template>

<style></style>
