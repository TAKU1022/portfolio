<template>
  <div id="drawer" class="l-drawer" aria-hidden="true">
    <div class="l-drawer__overlay" tabindex="-1" data-micromodal-close>
      <div
        ref="container"
        class="l-drawer__container"
        role="dialog"
        aria-modal="true"
      >
        <button
          ref="close-button"
          class="l-drawer__close-button"
          type="button"
          aria-label="メニューを閉じる"
          data-micromodal-close
        ></button>

        <nav>
          <ul>
            <li>
              <NuxtLink
                v-scroll-to="{ el: '#top' }"
                to
                class="l-drawer__link"
                @click.native="closeDrawer()"
                ><span class="l-drawer__link-text">Top</span></NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                v-scroll-to="{ el: '#attitude' }"
                to
                class="l-drawer__link"
                @click.native="closeDrawer()"
                ><span class="l-drawer__link-text">Attitude</span></NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                v-scroll-to="{ el: '#products' }"
                to
                class="l-drawer__link"
                @click.native="closeDrawer()"
                ><span class="l-drawer__link-text">Products</span></NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                v-scroll-to="{ el: '#skills' }"
                to
                class="l-drawer__link"
                @click.native="closeDrawer()"
                ><span class="l-drawer__link-text">Skills</span></NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
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
          this.$refs.container.style.paddingLeft = '';
          this.$refs[
            'close-button'
          ].style.right = `calc(6.5vw + ${this.scrollBarWidth}px)`;
        } else {
          this.$refs.container.style.paddingLeft = `calc(24px + ${this.scrollBarWidth}px)`;
          this.$refs['close-button'].style.right = '';
        }
      },
    },

    mounted() {
      const observer = new MutationObserver(this.callBackObserver);
      const target = this.$el;
      const config = { attributes: true, attributeFilter: ['aria-hidden'] };
      observer.observe(target, config);
    },

    methods: {
      callBackObserver(mutationList) {
        mutationList.forEach((mutation) => {
          if (mutation.target.ariaHidden === 'true') {
            this.$store.commit('drawer/closeDrawer');
          }
        });
      },
      closeDrawer() {
        // eslint-disable-next-line no-undef
        MicroModal.close('drawer');
      },
    },
  };
</script>

<style lang="scss" scoped>
  @keyframes fade-in {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .l-drawer {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 888;

    &[aria-hidden='false'] {
      .l-drawer__container,
      .l-drawer__close-button {
        animation: fade-in 0.8s;
      }
    }

    &[aria-hidden='true'] {
      .l-drawer__container,
      .l-drawer__close-button {
        animation: fade-out 0.8s;
      }
    }
  }

  .l-drawer__overlay {
    width: 100%;
    height: 100%;
  }

  .l-drawer__container {
    width: 100%;
    height: 100%;
    background-color: $primaryLight;
    overflow-y: scroll;
    padding: 120px 24px 24px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .l-drawer__link {
    display: flex;
    justify-content: center;
    font-family: 'googleLora', serif;
    font-size: 2.8rem;
    font-weight: bold;
    padding: 16px 0;
    position: relative;
    @include hover {
      .l-drawer__link-text {
        &::after {
          transform: scale(1, 1);
        }
      }
    }
  }

  .l-drawer__link-text {
    padding: 0 16px;
    position: relative;

    &::after {
      content: '';
      display: block;
      background-color: $primaryDark;
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: transform 0.3s;
      transform-origin: left top;
      transform: scale(0, 1);
      will-change: transform;
    }
  }

  .l-drawer__close-button {
    width: 64px;
    height: 64px;
    background-color: $primaryDark;
    border-radius: 50%;
    position: absolute;
    right: 6.5vw;
    bottom: 6.5vw;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 48%;
      height: 2px;
      background-color: $primaryWhite;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .l-drawer.is-open {
    display: block;
  }
</style>
