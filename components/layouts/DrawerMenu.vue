<template>
  <div id="drawer" class="l-drawer" :aria-hidden="isOpened ? 'false' : 'true'">
    <div class="l-drawer__overlay" tabindex="-1">
      <div class="l-drawer__container" role="dialog" aria-modal="true">
        <nav>
          <ul>
            <li></li>
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
    },

    // mounted() {
    //   const observer = new MutationObserver(this.callBackObserver);
    //   const target = this.$el;
    //   const config = { attributes: true, attributeFilter: ['aria-hidden'] };
    //   observer.observe(target, config);
    // },

    // methods: {
    //   callBackObserver(mutationList) {
    //     mutationList.forEach((mutation) => {
    //       if (mutation.target.ariaHidden === 'true') {
    //         this.$store.commit('drawer/closeDrawer');
    //       }
    //     });
    //   },
    // },
  };
</script>

<style lang="scss" scoped>
  /* @keyframes fade-in-drawer {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .fade-enter-active {
    animation: fade-in-drawer 0.5s;
  }

  .fade-leave-active {
    animation: fade-in-drawer 0.5s reverse;
  } */

  @keyframes fade-in-menu {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out-menu {
    100% {
      opacity: 0;
    }

    0% {
      opacity: 1;
    }
  }

  .l-drawer {
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 68px;
    left: 0;
    z-index: 888;

    &[aria-hidden='false'] {
      .l-drawer__overlay {
        animation: fade-in-overlay 0.5s forwards;
      }

      .l-drawer__container {
        animation: fade-in-menu 0.5s forwards;
      }
    }

    &[aria-hidden='true'] {
      .l-drawer__overlay {
        animation: fade-out-overlay 0.5s forwards;
      }

      .l-drawer__container {
        animation: fade-out-menu 0.5s forwards;
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
      padding: 80px;
    }
  }

  .is-open {
    display: block;
  }
</style>
