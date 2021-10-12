<template>
  <section id="top" class="p-home-top">
    <div>
      <h1 class="p-home-top__title">
        <span class="p-home-top__title-english" data-animation="continuity"
          >Uchida&nbsp;Takumi</span
        >
        <br />
        <span class="p-home-top__title-japanese" data-animation="continuity"
          >のポートフォリオ</span
        >
      </h1>
      <ScrollLink />
    </div>
  </section>
</template>

<script>
  import ScrollLink from '../parts/ScrollLink.vue';

  export default {
    components: { ScrollLink },
  };
</script>

<style lang="scss" scoped>
  .p-home-top {
    min-height: var(--vh, 100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: relative;
  }

  .p-home-top__title {
    text-align: center;
    font-weight: bold;
    padding-bottom: 48px;
  }

  .p-home-top__title-english {
    font-family: $fontLora;
    font-size: 4rem;
    letter-spacing: 0.03em;
    @include responsive(sm) {
      font-size: 6rem;
    }
    @include responsive(lg) {
      font-size: 8rem;
    }
  }

  .p-home-top__title-japanese {
    font-size: 3.2rem;
    @include responsive(sm) {
      font-size: 5.2rem;
    }
    @include responsive(lg) {
      font-size: 7.2rem;
    }
  }
</style>
