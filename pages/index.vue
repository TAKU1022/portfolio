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
      this.fixViewPort();
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
      fixViewPort() {
        const viewport = document.querySelector('meta[name="viewport"]');
        const switchViewport = () => {
          const value =
            window.outerWidth > 360
              ? 'width=device-width,initial-scale=1'
              : 'width=360';
          if (viewport.getAttribute('content') !== value) {
            viewport.setAttribute('content', value);
          }
        };
        window.addEventListener('resize', switchViewport);
        switchViewport();
      },
    },
  };
</script>
