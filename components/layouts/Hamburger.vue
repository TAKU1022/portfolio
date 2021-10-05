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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 34px;
    height: 22px;
    cursor: pointer;
    @include responsive(md) {
      display: none;
    }

    .l-hamburger__menu {
      display: block;
      width: 100%;
      height: 3px;
      background-color: $primaryDark;
      border-radius: 5px;
    }
  }
</style>
