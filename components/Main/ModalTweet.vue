<template>
  <div
    class="w-full h-full bg-white bg-opacity-10 z-30 flex justify-center fixed overflow-hidden"
    @click="showModal(false)"
  >
    <div
      class="bg-twitter-bg text-white text-left top-10 fixed rounded-2xl w-1/2"
      @click.stop=""
    >
      <div class="flex px-2 py-1 border-b border-gray-600">
        <span
          class="cursor-pointer rounded-full p-3 hover:bg-twitter-hover"
          @click="showModal(false)"
        >
          <svg
            height="20px"
            width="20px"
            viewBox="0 0 24 24"
            class="fill-current text-twitter"
          >
            <g>
              <path
                d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
              ></path>
            </g>
          </svg>
        </span>
      </div>
      <div class="pb-10 max-h-600 overflow-y-auto">
        <tweet-section></tweet-section>
      </div>
    </div>
    <portal to="prompt">
      <div
        class="w-full h-full bg-twitter bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden"
        @click="savePrompt(false)"
        v-if="tweet.savePrompt"
      >
        <prompt class="">
          <template #title> Simpan Tweet? </template>
          <template #desc>
            Anda dapat menyimpannya dan mengirimnya nanti dari Tweet yang belum
            terkirim.
          </template>
          <template #button>
            <button
              class="w-full bg-gray-700 hover:bg-gray-600 rounded-full py-2 px-2.5 text-white mr-4 transition duration-300 focus:outline-none font-bold"
              @click="savePrompt(false)"
            >
              Buang
            </button>
            <button
              class="w-full bg-twitter rounded-full py-2 px-2.5 text-white hover:bg-twitter-btn-hover transition duration-300 focus:outline-none font-bold"
              @click="savePrompt(true)"
            >
              Simpan
            </button>
          </template>
        </prompt>
      </div>
    </portal>
  </div>
</template>

<script>
import Prompt from "./Prompt.vue";
import TweetSection from "./TweetSection.vue";
import { mapState } from "vuex";
export default {
  components: { TweetSection, Prompt },
  computed: { ...mapState(["tweet"]) },
  methods: {
    showModal(payload) {
      this.tweet.tweet != ""
        ? this.$store.commit("tweet/savePrompt", true)
        : this.$store.commit("tweet/showModal", payload);
    },
    savePrompt(payload) {
      if (payload) {
        this.$store.commit("tweet/savePrompt", false);
      } else {
        this.$store.commit("tweet/savePrompt", false);
        this.$store.commit("tweet/showModal", payload);
      }
      // payload ? this.$store.commit("tweet/savePrompt", false) this.$store.commit("tweet/showModal", payload);
      // this.$store.commit("tweet/savePrompt", payload);
    },
  },
};
</script>

<style>
</style>
