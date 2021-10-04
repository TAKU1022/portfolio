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
  };
</script>
