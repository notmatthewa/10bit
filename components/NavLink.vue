<template>
    <a 
      :href="href" 
      class="text-text font-medium transition-all duration-300 relative hover:text-accent"
    >
      <slot></slot>
      <span class="absolute left-0 bottom-[-2px] w-0 h-px bg-accent transition-all duration-300 nav-underline"></span>
    </a>
  </template>
  
  <script setup>
  defineProps({
    href: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  a:hover .nav-underline {
    width: 100%;
  }
  </style>