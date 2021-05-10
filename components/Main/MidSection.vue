<template>
  <div
    class="flex flex-col w-6/12 flex-grow relative border-r-2 sm:border-l-2 border-gray-700"
  >
    <div
      class="border-b-2 border-gray-700 bg-twitter-bg flex justify-between items-center sticky top-0 z-20"
    >
      <slot name="header"> </slot>
    </div>

    <slot name="content"> </slot>
  </div>
</template>

<script>
export default {
  components: {
    RoundImg: () => import("~/components/Main/RoundImg.vue"),
  },
};
</script>

<style>
</style>
