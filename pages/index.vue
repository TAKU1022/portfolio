<template>
  <div>
    <CommonHeader />
    <MenuDrawer />
    <HamburgerMenu />
    <HomeMain />
    <CommonFooter />
  </div>
</template>

<script>
  import 'focus-visible';
  import CommonHeader from '~/components/layouts/CommonHeader.vue';
  import HomeMain from '~/components/layouts/HomeMain.vue';
  import CommonFooter from '~/components/layouts/CommonFooter.vue';
  import HamburgerMenu from '~/components/parts/HamburgerMenu.vue';
  import MenuDrawer from '~/components/layouts/MenuDrawer.vue';

  export default {
    components: {
      CommonHeader,
      HomeMain,
      CommonFooter,
      HamburgerMenu,
      MenuDrawer,
    },

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
