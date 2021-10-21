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
        <li
          v-for="product in productList"
          :key="product.name"
          class="js-fade-in"
        >
          <a :href="product.url" target="_blank" rel="noopener noreferrer">
            <article class="p-home-product">
              <div class="p-home-product__container">
                <picture>
                  <source
                    :srcset="require(`~/assets/images/${product.image.webp}`)"
                    type="image/webp"
                  />
                  <img
                    :src="require(`~/assets/images/${product.image.png}`)"
                    :alt="`${product.name}のイメージ画像`"
                    class="p-home-product__image"
                  />
                </picture>
              </div>
              <p class="p-home-product__name">{{ product.name }}</p>
              <p class="p-home-product__technology">
                <span class="p-home-product__technology-heading"
                  >【使用技術】</span
                ><span>{{ product.technology }}</span>
              </p>
            </article>
          </a>
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
            url: 'https://github.com/TAKU1022/menu-forest/',
            image: {
              webp: 'menu-suggestion.png.webp',
              png: 'menu-suggestion.png',
            },
            name: 'こんだての森（献立提案アプリ）',
            technology:
              'TypeScirpt, Angular, AngularMaterial, Firebase(Authentication, Firestore, Storage, Functions), Algolia',
          },
          {
            url: 'https://github.com/TAKU1022/portfolio/',
            image: {
              webp: 'portfolio.png.webp',
              png: 'portfolio.png',
            },
            name: 'ポートフォリオ（当サイト）',
            technology: 'JavaScript, Vue.js(Nuxt.js), Netlify, micromodal.js',
          },
          {
            url: 'https://github.com/TAKU1022/ec-demo/',
            image: {
              webp: 'demo-ec.png.webp',
              png: 'demo-ec.png',
            },
            name: 'デモECサイト',
            technology:
              'TypeScript, React, Redux(Redux-Thunk), Material UI, Firebase(Authentication, Firestore)',
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
    margin-bottom: 8px;
    @include responsive(lg) {
      font-size: 2rem;
      margin-bottom: 16px;
    }
  }

  .p-home-product__technology {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    padding: 0 8px;
    @include responsive(lg) {
      flex-direction: row;
    }
  }

  .p-home-product__technology-heading {
    flex-shrink: 0;
  }
</style>
