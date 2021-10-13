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
  import { gsap } from 'gsap';
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
      this.fadeInText();
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
      getWrappedSapnText(target) {
        const nodes = [...target.childNodes];
        let returnText = '';
        nodes.forEach((node) => {
          if (node.nodeType === 3) {
            const text = node.textContent.replace(/\r?\n/g, '');
            const splitText = text.split('');
            splitText.forEach((char) => {
              returnText = returnText + `<span>${char}</span>`;
            });
          } else {
            returnText = returnText + node.outerHTML;
          }
        });
        return returnText;
      },
      fadeInText() {
        const targetArray = [
          ...document.querySelectorAll('[data-animation="continuity"]'),
        ];
        targetArray.forEach((target) => {
          target.innerHTML = this.getWrappedSapnText(target);
          target.spans = target.querySelectorAll('span');
          const observer = new IntersectionObserver(this.doWhenIntersect, {
            rootMargin: '0px 0px 50px',
          });
          observer.observe(target);
        });
      },
      doWhenIntersect(entries, observer) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-observe', '');
            const timeLine = gsap.timeline();
            timeLine
              .from(entry.target, { opacity: 0, duration: 0.1 })
              .from(entry.target.spans, {
                y: '10%',
                opacity: 0,
                duration: 0.6,
                stagger: 0.04,
              });
            observer.unobserve(entry.target);
          }
        });
      },
    },
  };
</script>
