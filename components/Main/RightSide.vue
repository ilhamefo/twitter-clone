<template>
  <div class="lg:flex 2xl:w-6/12 hidden flex-grow w-3/12 h-full">
    <div class="flex flex-col mx-5 my-2 w-11/12 2xl:w-7/12">
      <slot name="search">
        <search :props="props" class="sticky top-0"></search>
      </slot>
      <div class="sticky -top-2/4">
        <!-- trendings -->
        <slot name="trending">
          <trending></trending>
        </slot>

        <!-- FollowRecommendation -->
        <slot name="recommendation">
          <follow-recommendation></follow-recommendation>
        </slot>

        <!-- topics -->
        <slot name="topics">
          <topics></topics>
        </slot>
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
  data() {
    return {
      props: {
        placeholder: "Cari di Twitter",
      },
    };
  },
};
</script>

<style>
</style>
