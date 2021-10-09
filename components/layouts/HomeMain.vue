<template>
  <main>
    <TopSection />
    <PointsSection />
    <ProductsSection />
    <SkillsSection />
  </main>
</template>

<script>
  import PointsSection from '../sections/AttitudeSection.vue';
  import ProductsSection from '../sections/ProductsSection.vue';
  import SkillsSection from '../sections/SkillsSection.vue';
  import TopSection from '../sections/TopSection.vue';

  export default {
    components: { TopSection, PointsSection, ProductsSection, SkillsSection },
  };
</script>
