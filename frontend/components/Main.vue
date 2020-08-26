<template>
  <main id="content">
    <slot></slot>
  </main>
</template>

<script>
  export default {
    name: "Main"
  }
</script>

<style lang="scss" scoped>
  main {
    background-color: var(--body);
    min-height: calc(100vh - 200px);
    color: var(--body-color);
  }
</style>
