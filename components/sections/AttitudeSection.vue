<template>
  <section id="attitude" class="p-home-section">
    <div class="wrapper">
      <h2 class="p-home-section__title">
        <span class="p-home-section__title-japanese" data-animation="continuity"
          >心構え</span
        >
        <span class="p-home-section__title-english" data-animation="continuity"
          >Attitude</span
        >
      </h2>
      <div class="p-home-attitude">
        <ul class="p-home-attitude__list">
          <li class="p-home-attitude__list-item">
            メンテナンス性を考慮したHTML/CSSコーディングを行います。
          </li>
          <li class="p-home-attitude__list-item">
            ユーザビリティ、アクセシビリティに配慮したコーディングを行います。
          </li>
          <li class="p-home-attitude__list-item">
            パフォーマンスの向上を常に意識して開発を進めます。
          </li>
          <li class="p-home-attitude__list-item">
            使いやすい管理画面を意識したWordPressテーマ作成（CMS構築）を行います。
          </li>
          <li class="p-home-attitude__list-item">
            短納期の案件にも、少しでもより良い品質に向けて妥協せず開発を行います。
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .p-home-attitude {
    max-width: 680px;
    margin: 0 auto;
  }

  .p-home-attitude__list {
    display: grid;
    gap: 3.2rem;
  }

  .p-home-attitude__list-item {
    display: flex;
    font-size: 1.8rem;

    &::before {
      content: '・';
    }
  }
</style>
