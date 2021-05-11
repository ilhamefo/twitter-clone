<template>
  <div class="">
    <tweet v-for="i in 3" :key="i"></tweet>
  </div>
</template>

<script>
import Tweet from "~/components/Main/Tweet.vue";
export default {
  components: { Tweet },
};
</script>

<style>
</style>
