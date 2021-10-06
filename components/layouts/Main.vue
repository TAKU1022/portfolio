<template>
  <main>
    <TopSection />
    <PointsSection />
    <ProductsSection />
  </main>
</template>

<script>
  import PointsSection from '../sections/AttitudeSection.vue';
  import ProductsSection from '../sections/ProductsSection.vue';
  import TopSection from '../sections/TopSection.vue';

  export default {
    components: { TopSection, PointsSection, ProductsSection },
  };
</script>
