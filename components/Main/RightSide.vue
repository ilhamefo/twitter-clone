<template>
  <div class="lg:flex xl:w-6/12 hidden flex-grow w-5/12 h-full">
    <div class="flex flex-col mx-5 my-2 w-11/12 2xl:w-7/12">
      <search class="sticky top-0"></search>
      <!-- trendings -->
      <div class="sticky -top-2/4">
        <trending></trending>

        <!-- FollowRecommendation -->
        <follow-recommendation></follow-recommendation>

        <!-- topics -->
        <topics></topics>

        <!-- footer -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import FollowRecommendation from "./FollowRecommendation.vue";
import Footer from "./Footer.vue";
import Search from "./Search.vue";
import Topics from "./Topics.vue";
import Trending from "./Trending.vue";
export default {
  components: { Search, Trending, FollowRecommendation, Topics, Footer },
};
</script>

<style>
</style>
