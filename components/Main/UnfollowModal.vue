<template>
  <div
    class="w-full h-full bg-white bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden left-0"
    @click="toggleModal(false)"
  >
    <prompt>
      <template #title> Setop ikuti {{ user.username }} </template>
      <template #desc>
        Tweet-nya tidak akan muncul lagi di timeline beranda Anda. Anda tetap
        dapat melihat profilnya, kecuali jika Tweet-nya dilindungi.
      </template>
      <template #button>
        <button
          class="w-full bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-2.5 text-white mr-4 transition duration-300 focus:outline-none font-bold"
          @click="toggleModal(false)"
        >
          Batal
        </button>
        <button
          class="w-full bg-twitter rounded-full py-2 px-2.5 text-white hover:bg-twitter-btn-hover transition duration-300 focus:outline-none font-bold"
          @click="fireUnfollow"
        >
          Setop Ikuti
        </button>
      </template>
    </prompt>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Prompt from "./Prompt.vue";
export default {
  components: {
    Prompt,
  },
  props: ["user"],
  methods: {
    toggleModal(toggle) {
      this.$store.commit("recommendation/showModalUnfollow", toggle);
    },
    fireUnfollow() {
      this.$store.dispatch("recommendation/fireUnfollow", this.user);
    },
  },
};
</script>

<style>
</style>
