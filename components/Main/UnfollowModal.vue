<template>
  <div
    class="w-full h-full bg-white bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden"
    @click="toggleModal(false)"
  >
    <div
      class="max-w-xs py-7 px-5 bg-twitter-bg flex flex-col justify-center items-center rounded-xl z-50"
      @click.stop=""
    >
      <span class="text-white font-bold text-xl"> Setop ikuti @username </span>
      <p class="text-center text-sm mt-3 leading-5 text-gray-400">
        Tweet-nya tidak akan muncul lagi di timeline beranda Anda. Anda tetap
        dapat melihat profilnya, kecuali jika Tweet-nya dilindungi.
      </p>
      <div class="grid grid-cols-2 grid-rows-1 gap-2 w-full mt-3">
        <button
          class="w-full bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-2.5 text-white mr-4 transition duration-300 focus:outline-none font-bold"
        >
          Batal
        </button>
        <button
          class="w-full bg-twitter rounded-full py-2 px-2.5 text-white hover:bg-twitter-btn-hover transition duration-300 focus:outline-none font-bold"
        >
          Setop Ikuti
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    toggleModal(toggle) {
      this.$store.commit("showModalUnfollow", toggle);
    },
    donothing() {
      console.log("iam nothing");
    },
  },
};
</script>

<style>
</style>
