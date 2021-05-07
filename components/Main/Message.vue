<template>
  <div
    class="fixed py-1.5 w-96 max-h bg-twitter-bg rounded-t-2xl bottom-0 right-8 z-20 shadow-white text-white grid grid-cols-1 grid-flow-row auto-rows-max gap-1 divide-y divide-gray-600 cursor-pointer"
  >
    <div
      class="flex justify-between items-center px-4 flex-grow"
      @click="show = !show"
    >
      <h1 class="font-extrabold text-xl">Pesan</h1>
      <div class="flex">
        <span class="mr-1 p-2 hover:bg-twitter-secondary-hover rounded-full">
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            class="fill-current text-twitter"
          >
            <g>
              <path
                d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z"
              ></path>
            </g>
          </svg>
        </span>
        <span class="p-2 hover:bg-twitter-secondary-hover rounded-full">
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            class="fill-current text-twitter"
            :class="[show ? 'transform rotate-180' : '']"
          >
            <g>
              <path
                d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z"
              ></path>
              <path
                d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
    <div class="overflow-y-scroll max-h-600">
      <transition name="fade">
        <messages-content v-if="show"></messages-content>
      </transition>
    </div>
  </div>
</template>

<script>
import MessagesContent from "./MessagesContent.vue";
import RoundImg from "./RoundImg.vue";
export default {
  components: { RoundImg, MessagesContent },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: bounce-in 0.4s;
}
.fade-leave-active {
  animation: bounce-in 0.4s reverse;
}
@keyframes bounce-in {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 600px;
  }
}
</style>
