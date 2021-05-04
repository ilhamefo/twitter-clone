<template>
  <div class="lg:flex xl:w-6/12 hidden flex-grow w-5/12 bg-opacity-30">
    <div class="flex flex-col mx-5 my-2 w-11/12 2xl:w-7/12">
      <search></search>

      <!-- trendings -->
      <trending></trending>

      <!-- FollowRecommendation -->

      <follow-recommendation></follow-recommendation>
    </div>
  </div>
</template>

<script>
import FollowRecommendation from "./FollowRecommendation.vue";
import Search from "./Search.vue";
import Trending from "./Trending.vue";
export default {
  components: { Search, Trending, FollowRecommendation },
};
</script>

<style>
</style>
