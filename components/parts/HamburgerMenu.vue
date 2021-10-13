<template>
  <button
    class="l-hamburger"
    type="button"
    data-micromodal-trigger="drawer"
    aria-label="メニューを開く"
    @click="openDrawer()"
  >
    <span class="l-hamburger__icon"></span>
  </button>
</template>

<script>
  export default {
    computed: {
      isOpened() {
        return this.$store.state.drawer.isOpened;
      },
      scrollBarWidth() {
        return window.innerWidth - document.body.clientWidth;
      },
    },

    watch: {
      isOpened() {
        if (this.isOpened) {
          document.body.style.paddingRight = `${this.scrollBarWidth}px`;
          this.$el.style.right = `calc(6.5vw + ${this.scrollBarWidth}px)`;
        } else {
          document.body.style.paddingRight = ``;
          this.$el.style.right = '';
        }
      },
    },

    mounted() {
      // eslint-disable-next-line no-undef
      MicroModal.init({
        disableScroll: true,
        disableFocus: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
      });
    },

    methods: {
      openDrawer() {
        this.$store.commit('drawer/openDrawer');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .l-hamburger {
    width: 64px;
    height: 64px;
    background-color: $primaryDark;
    border-radius: 50%;
    position: fixed;
    right: 6.5vw;
    bottom: 6.5vw;
    z-index: 777;
    transform: translateZ(0);
    @include responsive(md) {
      display: none;
    }
  }

  .l-hamburger__icon {
    display: block;
    width: 48%;
    height: 2px;
    background-color: $primaryWhite;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: inherit;
    will-change: transform opacity;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-color: inherit;
      position: absolute;
      transition: inherit;
      will-change: inherit;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }
</style>
