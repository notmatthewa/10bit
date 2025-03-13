<template>
  <div class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div class="h-48 flex items-center justify-center">
      <div class="h-24 w-24 rounded-full bg-background flex items-center justify-center text-3xl font-bold">
        {{ dev.initials }}
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ dev.name }}</h3>
      <p class="text-sm mb-4">{{ dev.title }}</p>
      <p class="mb-5">{{ dev.bio }}</p>
      <div class="flex no-wrap overflow-x-auto mb-6 skills-container">
        <span v-for="skill in dev.skills" :key="skill"
          class="text-xs py-1 px-3 skill text-accent bg-accent">
          {{ skill }}
        </span>
      </div>
      <a :href="dev.profileUrl" class="inline-flex items-center text-accent font-medium hover:underline" target="_blank" rel="noopener noreferrer">
        {{dev.pl}}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
// Component props
const props = defineProps({
  dev: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      initials: '',
      title: '',
      bio: '',
      skills: [],
      profileUrl: ''
    })
  }
});
</script>

<style scoped>
/* Make skills container adjust spacing but keep single row */
.skills-container {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--gap-size, 0.5rem);
}

.skill {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: var(--secondary);
}

/* On smaller screens allow wrapping */
@media (max-width: 640px) {
  .skills-container {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
}

/* Adjust spacing between skills based on container width */
@media (min-width: 641px) {
  .skills-container {
    --gap-size: clamp(0.25rem, 2vw, 0.5rem);
  }
}
</style>