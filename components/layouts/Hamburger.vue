<template>
  <button class="l-hamburger">
    <span class="l-hamburger__menu"></span>
    <span class="l-hamburger__menu"></span>
    <span class="l-hamburger__menu"></span>
  </button>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .l-hamburger {
    display: none;
    width: 32px;
    height: 28px;
    cursor: pointer;
    @include responsive(md) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }

    .l-hamburger__menu {
      display: block;
      width: 100%;
      height: 3px;
      background-color: $primaryDark;
    }
  }
</style>
