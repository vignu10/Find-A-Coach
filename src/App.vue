<template>
  <the-header></the-header>
  <router-view></router-view>
</template>
<script>
import TheHeader from './component/layout/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>
