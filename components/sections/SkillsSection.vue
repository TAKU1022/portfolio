<template>
  <section id="skills" class="p-home-section p-home-section--skills">
    <div class="wrapper">
      <h2 class="p-home-section__title">
        <span class="p-home-section__title-japanese js-continuity-fade-in"
          >スキル一覧</span
        >
        <span class="p-home-section__title-english js-continuity-fade-in"
          >Skills</span
        >
      </h2>
      <ul class="p-home-skills">
        <li v-for="skill in skillList" :key="skill.category">
          <h3 class="p-home-skills__category-title js-fade-in">
            {{ skill.category }}
          </h3>
          <ul class="p-home-skills__list">
            <li
              v-for="technology in skill.technologyList"
              :key="technology.name"
              class="p-home-skills__list-item js-fade-in"
            >
              <img
                class="p-home-skills__icon"
                :src="require(`~/assets/images/${technology.icon}`)"
                alt=""
              />
              <div>
                <p class="p-home-skills__name">{{ technology.name }}</p>
                <p class="p-home-skills__content">{{ technology.content }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        skillList: [
          {
            category: 'Developer Tools',
            technologyList: [
              {
                icon: 'icon-vscode.svg',
                name: 'VSCode',
                content: 'コーディング時に採用しているエディタは、VSCodeです。',
              },
              {
                icon: 'icon-git.svg',
                name: 'Git',
                content: 'チーム開発にて、GitHubを利用した経験があります。',
              },
              {
                icon: 'icon-gulp.svg',
                name: 'Gulp',
                content:
                  '普段の業務では、タスクランナーはGulpを使用しています。',
              },
              {
                icon: 'icon-webpack.svg',
                name: 'Webpack',
                content:
                  'モジュールごとに分割したJavaScriptファイルをバンドルするために使用しています。IEの対応にはBabelを導入します。',
              },
            ],
          },
          {
            category: 'Mark up',
            technologyList: [
              {
                icon: 'icon-html5.svg',
                name: 'HTML5',
                content:
                  'セマンティックHTMLを意識してコーディングを進めます。また、アクセシビリティを考慮したマークアップを心がけています。',
              },
              {
                icon: 'icon-css3.svg',
                name: 'CSS3',
                content:
                  'メンテナンス性を意識したコーディングを心がけています。一人でコーディングを担当した場合は、BEM・FLOCSS等のCSS設計を採用しています。',
              },
              {
                icon: 'icon-sass.svg',
                name: 'Sass',
                content:
                  'SCSS記法でコーディングを進めます。積極的にDartSassを導入して開発を進めています。',
              },
            ],
          },
          {
            category: 'JavaScript',
            technologyList: [
              {
                icon: 'icon-javascript.svg',
                name: 'JavaScript',
                content:
                  'ES2015構文でコーディングを進めます。IEの対応にはBabelを導入します。web制作においても基本的なDOM操作も含めて、JavaScriptのみで完結させています。',
              },
              {
                icon: 'icon-typescript.svg',
                name: 'TypeScript',
                content: '個人開発では基本的にTypeScriptを採用しています。',
              },
              {
                icon: 'icon-jquery.svg',
                name: 'jQuery',
                content: 'IE10以下の対応などにはjQueryを用いて開発を進めます。',
              },
              {
                icon: 'icon-angular.svg',
                name: 'Angular',
                content:
                  'Angularを用いて献立提案アプリを個人開発しました。RxJS用いて開発しています。',
              },
              {
                icon: 'icon-vue.svg',
                name: 'Vue.js',
                content: '当サイトをNuxt.jsで用いて開発しました。',
              },
            ],
          },
          {
            category: 'PHP',
            technologyList: [
              {
                icon: 'icon-php.svg',
                name: 'PHP',
                content:
                  'WordPressでのテーマファイル作成時に必要になる基本的な構文について習得しました。',
              },
              {
                icon: 'icon-wordpress.svg',
                name: 'WordPress',
                content:
                  'テーマの作成から、Advanced Custom Fieldsを用いたCMS構築、記事のタグやカテゴリーの絞り込みや検索など、基本的なカスタマイズをしたコーポレートサイトの開発経験があります。',
              },
            ],
          },
          {
            category: 'Design Tools',
            technologyList: [
              {
                icon: 'icon-illustrator.svg',
                name: 'Illustrator',
                content:
                  '基本的な操作とコーディングの際に必要な情報の抜き出し、画像の適切な書き出しを行うことができます。',
              },
              {
                icon: 'icon-photoshop.svg',
                name: 'Photoshop',
                content:
                  '基本的な操作とコーディングの際に必要な情報の抜き出し、画像の適切な書き出しを行うことができます。',
              },
              {
                icon: 'icon-xd.svg',
                name: 'Adobe XD',
                content:
                  '基本的な操作とコーディングの際に必要な情報の抜き出し、画像の適切な書き出しを行うことができます。',
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .p-home-skills {
    display: grid;
    gap: 56px;
    @include responsive(md) {
      gap: 80px;
    }
  }

  .p-home-skills__category-title {
    display: flex;
    justify-content: center;
    font-size: 2.4rem;
    margin-bottom: 24px;
    @include responsive(md) {
      font-size: 2.8rem;
      margin-bottom: 32px;
    }
  }

  .p-home-skills__list {
    display: grid;
    gap: 16px;
    @include responsive(sm) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include responsive(lg) {
      grid-template-columns: repeat(3, 1fr);
    }
    @include responsive(xl) {
      gap: 24px;
    }
  }

  .p-home-skills__list-item {
    background-color: $primaryWhite;
    border-radius: 10px;
    padding: 24px;
  }

  .p-home-skills__icon {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 8px;
    @include responsive(lg) {
      width: 80px;
      height: 80px;
    }
  }

  .p-home-skills__name {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .p-home-skills__content {
    display: flex;
    justify-content: center;
    font-size: 1.6rem;
  }
</style>
