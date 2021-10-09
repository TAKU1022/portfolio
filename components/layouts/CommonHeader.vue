<template>
  <header id="header" class="l-header">
    <NuxtLink class="l-header__logo" to="/">
      <span class="l-header__logo-main">TAKU</span
      ><span class="l-header__logo-sub">portfolio</span>
    </NuxtLink>
    <nav class="l-header__nav">
      <ul class="l-header__list">
        <li>
          <NuxtLink v-scroll-to="{ el: '#top' }" to class="l-header__link"
            >Top</NuxtLink
          >
        </li>
        <li>
          <NuxtLink v-scroll-to="{ el: '#attitude' }" to class="l-header__link"
            >Attitude</NuxtLink
          >
        </li>
        <li>
          <NuxtLink v-scroll-to="{ el: '#products' }" to class="l-header__link"
            >Products</NuxtLink
          >
        </li>
        <li>
          <NuxtLink v-scroll-to="{ el: '#skills' }" to class="l-header__link"
            >skills</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .l-header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $fontLora;
    padding: 16px;
    z-index: 999;
    transform: translateZ(0);
    @include responsive(md) {
      box-shadow: none;
      background-color: transparent;
      padding: 16px 32px;
    }
  }

  .l-header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 1;
  }

  .l-header__logo-main {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 8px;
    @include responsive(lg) {
      font-size: 3.2rem;
    }
  }

  .l-header__logo-sub {
    font-size: 1.2rem;
    font-weight: 500;
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
    gap: 3.2rem;
    @include responsive(lg) {
      gap: 7.2rem;
    }
  }

  .l-header__link {
    font-size: 2rem;
    font-weight: bold;
    padding: 8px;
    position: relative;
    @include hover {
      &::after {
        transform: scale(1, 1);
      }
    }
    @include responsive(lg) {
      font-size: 2.4rem;
    }

    &::after {
      content: '';
      display: block;
      background-color: $primaryDark;
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 4px;
      transition: transform 0.3s;
      transform-origin: left top;
      transform: scale(0, 1);
      will-change: transform;
      @include responsive(lg) {
        height: 3px;
      }
    }
  }
</style>
