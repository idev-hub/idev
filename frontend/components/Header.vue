<template>
  <header>
    <div class="container navbar-container">
      <a href="/" class="logo">
        <Logo></Logo>
      </a>
    </div>
  </header>
</template>

<script>
  import Logo from "./Logo";

  export default {
    name: "Header",
    components: {Logo},
  }
</script>

<style lang="scss" scoped>
  header {
    background-color: var(--primary);
    min-height: 100px;

    .navbar-container {
      min-height: inherit;
      display: flex;
      align-items: center;

      a {
        height: 100%;
        display: block;
      }
    }
  }
</style>
