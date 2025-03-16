<template>
  <a
    class="font-medium transition-all duration-300 relative"
    :class="{ 'text-accent': active, 'text-text': !active }"
    :href="localePath(href)"
  >
    <span class="nav-hover"><slot></slot></span>
    <span 
      class="absolute left-0 bottom-[-2px] h-px bg-accent-gradient transition-all duration-300 nav-underline"
      :class="{ 'w-full': active, 'w-0': !active }"
    ></span>
  </a>
</template>

<script setup>
const localePath = useLocalePath()

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
  cursor: pointer;
}

a:hover .nav-hover {
  cursor: pointer;
}
</style>