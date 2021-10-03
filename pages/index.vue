<template>
  <div>
    <Header />
    <TopSection />
  </div>
</template>

<script>
  import 'focus-visible';
  import Header from '~/components/layouts/Header.vue';
  import TopSection from '~/components/sections/TopSection.vue';

  export default {
    components: { Header, TopSection },
  };
</script>
