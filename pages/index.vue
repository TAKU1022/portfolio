<template>
  <div>
    <Header />
    <DrawerMenu />
    <Main />
  </div>
</template>

<script>
  import 'focus-visible';
  import Header from '~/components/layouts/Header.vue';
  import Main from '~/components/layouts/Main.vue';
  import DrawerMenu from '~/components/layouts/DrawerMenu.vue';

  export default {
    components: { Header, Main, DrawerMenu },

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
