<template>
  <NuxtLink v-scroll-to="{ el: '#attitude' }" to class="c-scroll-link">
    <span class="c-scroll-link__text">scroll</span>
  </NuxtLink>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @keyframes move-arrow {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 25%);
    }
    100% {
      transform: translateX(-50%, 0);
    }
  }

  .c-scroll-link {
    display: flex;
    align-items: center;
    width: fit-content;
    padding-right: 14px;
    margin: 0 auto;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    animation: move-arrow 1s ease-in-out infinite;
    will-change: transform;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 1px;
      background-color: $primaryDark;
    }

    &::before {
      height: 20px;
      position: absolute;
      right: 14px;
      bottom: 0;
      transform-origin: bottom;
      transform: rotate(45deg);
    }

    &::after {
      height: 50px;
    }
  }

  .c-scroll-link__text {
    font-family: 'googleLora', serif;
    font-size: 1.4rem;
    writing-mode: vertical-rl;
  }
</style>
