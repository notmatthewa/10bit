<template>
  <a 
    :href="href" 
    class="text-text font-medium transition-all duration-300 relative"
    :class="{ 'text-accent': active }"
  >
    <slot></slot>
    <span 
      class="absolute left-0 bottom-[-2px] h-px bg-accent transition-all duration-300 nav-underline"
      :class="{ 'w-full': active, 'w-0': !active }"
    ></span>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
a:hover .nav-underline {
  width: 100%;
}
</style>