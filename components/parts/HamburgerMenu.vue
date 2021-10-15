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
    },

    watch: {
      isOpened() {
        if (this.isOpened) {
          this.fixBackface(true);
        } else {
          this.fixBackface(false);
        }
      },
    },

    mounted() {
      // eslint-disable-next-line no-undef
      MicroModal.init({
        disableFocus: true,
        awaitOpenAnimation: true,
        awaitCloseAnimation: true,
      });
    },

    methods: {
      openDrawer() {
        this.$store.commit('drawer/openDrawer');
      },
      fixBackface(isFixed) {
        const scrollbarWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.paddingRight = isFixed ? `${scrollbarWidth}px` : '';
        this.$el.style.right = isFixed
          ? `calc(6.5vw + ${scrollbarWidth}px)`
          : '';

        const scrollingElement = () => {
          const browser = window.navigator.userAgent.toLowerCase();
          if ('scrollingElement' in document) return document.scrollingElement;
          if (browser.indexOf('webkit') > 0) return document.body;
          return document.documentElement;
        };

        const scrollY = isFixed
          ? scrollingElement().scrollTop
          : parseInt(document.body.style.top || '0');

        const styles = {
          height: '100vh',
          left: '0',
          overflow: 'hidden',
          position: 'fixed',
          top: `${scrollY * -1}px`,
          width: '100vw',
        };

        Object.keys(styles).forEach((key) => {
          document.body.style[key] = isFixed ? styles[key] : '';
        });

        if (!isFixed) window.scrollTo(0, scrollY * -1);
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
