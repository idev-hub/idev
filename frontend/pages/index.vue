<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <div></div>
          <div class="flex justify-content-center flex-column">
            <h1>Alexey Snegirev</h1>
            <p class="lead">Multiply. He fruitful shall whales without under god so you're saw have Land. Don't dominion doesn't
              fifth you
              image from. </p>

            <div class="social-list">
              <ul>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'single',
    name: 'index',
  }
</script>

<style lang="scss" scoped>
  .section {
    background-color: var(--body);
    padding: 15px 0;

    .grid {
      min-height: calc(100vh - 130px);
    }

    h1 {
      margin-bottom: 1em;
    }
  }
</style>
