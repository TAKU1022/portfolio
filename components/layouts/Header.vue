<template>
  <header class="l-header">
    <NuxtLink class="l-header__logo" to="/#">
      <span class="l-header__logo__main">TAKU</span
      ><span class="l-header__logo__sub">portfolio</span>
    </NuxtLink>
    <nav>
      <ul class="l-header__list">
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Top</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Points</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">Products</NuxtLink>
        </li>
        <li class="l-header__list__item">
          <NuxtLink class="l-header__link" to="/#">skills</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .l-header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Lora', serif;
    padding: 8px 48px 8px 32px;

    .l-header__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .l-header__logo__main {
      font-size: 2.4rem;
      font-weight: bold;
    }

    .l-header__logo__sub {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .l-header__list {
      display: grid;
      grid-template-columns: repeat(4, auto);
      gap: 4rem;
    }

    .l-header__list__item {
      font-size: 1.6rem;
    }

    .l-header__link {
      font-weight: bold;
    }
  }
</style>
