<template>
  <section id="products" class="p-home-section p-home-section--products">
    <div class="wrapper">
      <h2 class="p-home-section__title">
        <span class="p-home-section__title-japanese js-continuity-fade-in"
          >個人開発一覧</span
        >
        <span class="p-home-section__title-english js-continuity-fade-in"
          >Products</span
        >
      </h2>
      <ul class="p-home-products">
        <li v-for="product in productList" :key="product.id">
          <NuxtLink to="/">
            <article class="p-home-product">
              <div class="p-home-product__container">
                <picture>
                  <source
                    :srcset="require(`~/assets/images/${product.image.webp}`)"
                    type="image/webp"
                  />
                  <img
                    class="p-home-product__image"
                    :src="require(`~/assets/images/${product.image.png}`)"
                    loading="lazy"
                    alt=""
                  />
                </picture>
              </div>
              <p class="p-home-product__name">{{ product.name }}</p>
            </article>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        productList: [
          {
            id: 'menu-suggestion',
            image: {
              webp: 'menu-suggestion.png.webp',
              png: 'menu-suggestion.png',
            },
            name: 'こんだての森（献立提案アプリ）',
          },
          {
            id: 'portfolio',
            image: {
              webp: 'portfolio.png.webp',
              png: 'portfolio.png',
            },
            name: 'ポートフォリオ（当サイト）',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .p-home-products {
    display: grid;
    gap: 56px;
    @include responsive(md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .p-home-product {
    @include hover {
      .p-home-product__container {
        transform: scale(0.9);
      }
    }
  }

  .p-home-product__container {
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 16px;
    position: relative;
    transition: transform 0.3s ease-out;

    &::before {
      content: '';
      display: block;
      padding-bottom: 56.25%;
    }
  }

  .p-home-product__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    will-change: transform;
  }

  .p-home-product__name {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0 24px;
  }
</style>
