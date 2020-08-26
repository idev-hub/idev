<template>
  <div id="single">
    <Header>

    </Header>
    <Main>
      <nuxt/>
    </Main>
    <Footer>

    </Footer>
  </div>
</template>

<script>
  import Main from "../components/Main";
  import Header from "../components/Header";
  import Footer from "../components/Footer";

  export default {
    components: {Footer, Header, Main}
  }
</script>

<style scoped>

</style>
