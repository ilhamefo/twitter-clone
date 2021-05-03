<template>
  <div class="flex">
    <left-side class="fixed"></left-side>
    <!-- <left-side class=""></left-side> -->
  </div>
</template>
<script>
import LeftSide from "~/components/Main/LeftSide.vue";
import ResizeAuto from "~/components/ResizeAuto.vue";
export default {
  name: "App",
  components: {
    ResizeAuto,
    LeftSide,
  },
};
</script>

