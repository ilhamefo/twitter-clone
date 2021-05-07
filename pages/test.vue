<template>
  <p
    class="truncate max-w-xs whitespace-nowrap px-6 py-4 mx-auto bg-indigo-200 text-indigo-500 font-medium rounded-lg"
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed
    dolorum ratione dolorem nisi velit cum.
  </p>
</template>

<script>
import Loading from "~/components/Main/Loading.vue";
export default {
  components: { Loading },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
