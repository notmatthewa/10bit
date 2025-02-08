<template>
  <div>
    <h1>Vue.js</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  color: red;
}
</style>
