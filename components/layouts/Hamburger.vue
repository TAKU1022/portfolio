<template>
  <button
    class="l-hamburger"
    type="button"
    :aria-expanded="isOpened ? 'true' : 'false'"
    @click="toggleDrawer()"
  >
    <span class="l-hamburger__menu"></span>
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
      toggleDrawer() {
        const trigger = this.$el;

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
    background-color: $primaryDark;
    width: 68px;
    height: 100%;
    cursor: pointer;
    position: relative;
    @include hover {
      opacity: 0.9;
    }
    @include responsive(md) {
      display: none;
    }

    .l-hamburger__menu {
      display: block;
      width: 50%;
      height: 3px;
      background-color: $primaryWhite;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s ease-in-out;
      will-change: transform;

      &::before,
      &::after {
        content: '';
        display: block;
        background-color: inherit;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: inherit;
        will-change: transform;
      }

      &::before {
        top: -8px;
      }

      &::after {
        top: 8px;
      }
    }

    &[aria-expanded='true'] {
      .l-hamburger__menu {
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
</style>
