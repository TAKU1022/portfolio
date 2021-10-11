<template>
  <section class="p-home-parallax">
    <div ref="parallax" class="p-home-parallax__inner">
      <img
        class="p-home-parallax__image"
        src="~/assets/images/bg-parallax.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
  import { gsap } from 'gsap';

  export default {
    mounted() {
      window.console.log(this.$refs.parallax);
      const parallaxIntersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const onScroll = () => {
              gsap.to(entry.target.firstChild, {
                duration: 0.5,
                ease: 'power2.out',
                y: entry.target.getBoundingClientRect().top * 0.2,
              });
            };

            if (entry.isIntersecting) {
              window.addEventListener('scroll', onScroll, { passive: true });
            } else {
              window.removeEventListener('scroll', onScroll, { passive: true });
            }
          });
        },
        { rootMargin: '0px' }
      );
      parallaxIntersectionObserver.observe(this.$refs.parallax);
    },
  };
</script>

<style lang="scss" scoped>
  .p-home-parallax {
    padding: 80px 0 40px;
  }

  .p-home-parallax__inner {
    height: 400px;
    overflow: hidden;
    position: relative;
  }

  .p-home-parallax__image {
    width: 300%;
    max-width: none;
    display: block;
    position: absolute;
    top: -50%;
    left: 0;
  }
</style>
