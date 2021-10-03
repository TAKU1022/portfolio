<template>
  <section class="p-home-top">
    <div>
      <h1 class="p-home-top__title">
        <span class="p-home-top__title__english">Uchida Takumi</span>
        <br />
        <span class="p-home-top__title__japanese">のポートフォリオ</span>
      </h1>
      <ScrollLink />
    </div>
  </section>
</template>

<script>
  import ScrollLink from '../parts/ScrollLink.vue';

  export default {
    components: { ScrollLink },
    mounted() {
      window.console.log('mounted');
    },
  };
</script>

<style lang="scss" scoped>
  .p-home-top {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 64px;
      height: 64px;
      position: absolute;
      @include responsive(lg) {
        width: 80px;
        height: 80px;
      }
    }

    &::before {
      top: 16px;
      left: 16px;
      border-top: 3px solid $primaryDark;
      border-left: 3px solid $primaryDark;
    }

    &::after {
      right: 16px;
      bottom: 16px;
      border-right: 3px solid $primaryDark;
      border-bottom: 3px solid $primaryDark;
    }

    .p-home-top__title {
      text-align: center;
      font-weight: bold;
      padding-bottom: 80px;
    }

    .p-home-top__title__english {
      font-family: $fontLora;
      font-size: 4rem;
      @include responsive(sm) {
        font-size: 6rem;
      }
      @include responsive(lg) {
        font-size: 8rem;
      }
    }

    .p-home-top__title__japanese {
      font-size: 3.2rem;
      @include responsive(sm) {
        font-size: 5.2rem;
      }
      @include responsive(lg) {
        font-size: 7.2rem;
      }
    }
  }
</style>
