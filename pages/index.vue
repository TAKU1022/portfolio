<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
  import 'focus-visible';
  import Header from '~/components/layouts/Header.vue';
  import Main from '~/components/layouts/Main.vue';

  export default {
    components: { Header, Main },

    mounted() {
      this.setFillHeight();
    },

    methods: {
      getFillHeight() {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      },
      setFillHeight() {
        let vw = window.innerWidth;

        window.addEventListener('resize', () => {
          if (vw === window.innerWidth) {
            return;
          }

          vw = window.innerWidth;
          this.getFillHeight();
        });

        this.getFillHeight();
      },
    },
  };
</script>
