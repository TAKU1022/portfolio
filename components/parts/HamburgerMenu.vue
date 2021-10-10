<template>
  <button
    class="l-hamburger"
    type="button"
    :aria-expanded="isOpened ? 'true' : 'false'"
    @click="toggleDrawer($event)"
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

    methods: {
      toggleDrawer(event) {
        const trigger =
          event.target.nodeName === 'BUTTON'
            ? event.target
            : event.target.parentElement;

        if (trigger.ariaExpanded === 'false') {
          this.$store.commit('drawer/openDrawer');
        } else {
          this.$store.commit('drawer/closeDrawer');
        }
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
    z-index: 999;
    transform: translateZ(0);
    transition: 0.5s;
    will-change: transform;

    &[aria-expanded='true'] {
      .l-hamburger__icon {
        transform: translate(-50%, -50%) rotate(45deg);

        &::before,
        &::after {
          top: 0;
        }

        &::before {
          transform: rotate(90deg);
        }

        &::after {
          opacity: 0;
        }
      }
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
