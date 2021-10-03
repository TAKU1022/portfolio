<template>
  <header class="l-header">
    <NuxtLink class="l-header__logo" to="/#">
      <span class="l-header__logo__main">TAKU</span
      ><span class="l-header__logo__sub">portfolio</span>
    </NuxtLink>
    <nav class="l-header__nav">
      <ul class="l-header__list">
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Top</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Points</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Products</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">skills</NuxtLink>
        </li>
      </ul>
    </nav>
    <Hamburger />
  </header>
</template>

<script>
  import Hamburger from './Hamburger.vue';

  export default {
    components: { Hamburger },
  };
</script>

<style lang="scss" scoped>
  .l-header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lora', serif;
    padding: 8px 24px;
    @include responsive(md) {
      padding: 8px 48px 8px 32px;
    }

    .l-header__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .l-header__logo__main {
      font-size: 2.4rem;
      font-weight: bold;
      @include responsive(lg) {
        font-size: 3.2rem;
      }
    }

    .l-header__logo__sub {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: -0.2em;
      @include responsive(lg) {
        font-size: 1.4rem;
      }
    }

    .l-header__nav {
      display: none;
      @include responsive(md) {
        display: block;
      }
    }

    .l-header__list {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 4rem;
      @include responsive(lg) {
        gap: 8rem;
      }
    }

    .l-header__list__item {
      font-size: 1.8rem;
      @include responsive(lg) {
        font-size: 2.2rem;
      }
    }

    .l-header__link {
      font-weight: bold;
    }
  }
</style>
