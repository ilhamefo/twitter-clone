<template>
  <div class="">
    <client-only>
      <portal-target name="prompt"></portal-target>
      <portal-target name="target"></portal-target>
    </client-only>
    <div class="flex bg-twitter-bg relative">
      <div
        class="sm:flex hidden justify-start sm:justify-end w-1/12 md:w-2/12 xl:w-3/12 2xl:w-4/12 h-screen relative z-10"
      >
        <left-side class="fixed left-0 md:-left-12"></left-side>
      </div>
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    LeftSide: () => import("~/components/Main/LeftSide.vue"),
  },
  beforeMount() {
    this.$store.dispatch("users/getUsers");
  },
};
</script>
<style>
</style>
