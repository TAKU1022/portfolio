<template>
  <main>
    <TopSection />
    <PointsSection />
  </main>
</template>

<script>
  import PointsSection from '../sections/AttitudeSection.vue';
  import TopSection from '../sections/TopSection.vue';

  export default {
    components: { TopSection, PointsSection },
  };
</script>
