<template>
  <transition name="slide">
    <header v-if="isShow" id="header" class="l-header">
      <NuxtLink class="l-header__logo" to="/">
        <span class="l-header__logo-main">TAKU</span
        ><span class="l-header__logo-sub">portfolio</span>
      </NuxtLink>
      <nav class="l-header__nav">
        <ul class="l-header__list">
          <li>
            <NuxtLink class="l-header__link" to="/#">Top</NuxtLink>
          </li>
          <li>
            <NuxtLink class="l-header__link" to="/#">Points</NuxtLink>
          </li>
          <li>
            <NuxtLink class="l-header__link" to="/#">Products</NuxtLink>
          </li>
          <li>
            <NuxtLink class="l-header__link" to="/#">skills</NuxtLink>
          </li>
        </ul>
      </nav>
      <Hamburger />
    </header>
  </transition>
</template>

<script>
  import Hamburger from './Hamburger.vue';

  export default {
    components: { Hamburger },

    data() {
      return {
        isShow: false,
      };
    },

    mounted() {
      this.toggleHeaderState();
    },

    methods: {
      toggleHeaderState() {
        window.addEventListener(
          'scroll',
          () => {
            if (window.innerHeight - 80 > window.pageYOffset) {
              this.isShow = false;
            } else {
              this.isShow = true;
            }
          },
          { passive: true }
        );
      },
    },
  };
</script>

<style lang="scss" scoped>
  .slide-enter-active {
    animation: slide-in-header 0.5s;
  }

  .slide-leave-active {
    animation: slide-in-header 0.5s reverse;
  }

  @keyframes slide-in-header {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  .l-header {
    position: fixed;
    width: 100%;
    background-color: $primaryWhite;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: $fontLora;
    padding: 8px 24px;
    z-index: 888;
    will-change: transform;
    @include responsive(md) {
      background-color: transparent;
      padding: 8px 48px 8px 32px;
    }

    .l-header__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .l-header__logo-main {
      font-size: 2.4rem;
      font-weight: bold;
      @include responsive(lg) {
        font-size: 3.2rem;
      }
    }

    .l-header__logo-sub {
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
      gap: 3.2rem;
      @include responsive(lg) {
        gap: 7.2rem;
      }
    }

    .l-header__link {
      font-size: 1.8rem;
      font-weight: bold;
      padding: 8px;
      position: relative;
      @include hover {
        &::after {
          transform: scale(1, 1);
        }
      }
      @include responsive(lg) {
        font-size: 2.2rem;
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
  }
</style>
