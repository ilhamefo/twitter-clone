<template>
  <radial-progress-bar
    :diameter="30"
    :completed-steps="input"
    :total-steps="totalSteps"
    :strokeWidth="3"
    :innerStrokeWidth="3"
    startColor="#1DA1F2"
    stopColor="#1DA1F2"
    :animateSpeed="300"
  >
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  props: ["input"],
  data() {
    return {
      completedSteps: 0,
      totalSteps: 280,
    };
  },

  components: {
    RadialProgressBar,
  },
};
</script>
