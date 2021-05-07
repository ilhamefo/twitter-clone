<template>
  <div class="flex justify-end xl:justify-start relative">
    <transition name="fade">
      <user-modal v-if="data.showModalUser"></user-modal>
    </transition>
    <div
      class="xl:max-w-max max-w-min xl:px-2 xl:py-2.5 p-2 flex justify-between items-center hover:bg-twitter-hover active:bg-twitter-btn-hover active:bg-opacity-30 rounded-full mb-3 cursor-pointer transition duration-300"
      @click="toggleModal"
    >
      <div class="flex items-center">
        <round-img :size="10" class="xl:mr-5"></round-img>
        <div class="flex flex-col xl:mr-16">
          <span class="font-bold text-white hidden xl:flex">eof</span>
          <span class="text-gray-500 hidden xl:flex">@ilhamefo</span>
        </div>
      </div>
      <span class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFF"
          class="hidden xl:flex"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
import UserModal from "./UserModal.vue";
import { mapState } from "vuex";
export default {
  components: { RoundImg, UserModal },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    toggleModal() {
      this.$store.commit("showModalUser");
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: bounce-in 0.3s;
}
.fade-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
