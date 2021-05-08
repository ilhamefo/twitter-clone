<template>
  <div>
    Hi i'am home
    <NuxtChild />
    <nuxt-link to="/test/create">open modal</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "test",
  name: "Home",
  components: {},
  mounted() {},
};
</script>
