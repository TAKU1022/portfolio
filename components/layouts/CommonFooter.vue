<template>
  <footer class="l-footer">
    <p><small class="l-footer__corporate">&copy;TAKU</small></p>
  </footer>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .l-footer {
    display: flex;
    justify-content: center;
    background-color: $primaryDark;
    color: $primaryWhite;
    padding: 32px;
    @include responsive(md) {
      padding: 40px;
    }

    .l-footer__corporate {
      font-size: 12px;
      @include responsive(md) {
        font-size: 14px;
      }
    }
  }
</style>
