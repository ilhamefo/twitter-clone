<template>
  <div
    class="w-full h-full bg-white bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden"
    @click="$router.back()"
  >
    <div
      class="w-full h-full sm:rounded-none md:rounded-xl md:h-2/3 md:w-1/2 2xl:w-1/3 p-0 text-white"
      @click.stop=""
    >
      <card class="h-full sm:rounded-none md:rounded-xl">
        <template #header class="">
          <div class="flex items-center">
            <span
              class="cursor-pointer rounded-full p-3 hover:bg-twitter-hover mr-3"
              @click="$router.back()"
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
            <div class="">Tren</div>
          </div>
        </template>
        <template #content>
          <div class="text-xl font-extrabold px-4 py-2">Lokasi</div>
          <div class="flex flex-col px-4 py-2 relative mt-1">
            <label
              class="flex justify-between items-start cursor-pointer group"
            >
              <div class="select-none my-1">Tampilkan konten di lokasi ini</div>
              <div
                class="group-hover:bg-twitter-secondary-hover rounded-full flex items-center justify-center p-3 absolute right-0 top-0 mr-2"
              >
                <div
                  class="bg-white border-2 rounded-lg cursor-pointer border-twitter w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500"
                >
                  <input
                    type="checkbox"
                    class="opacity-0 absolute bg-twitter"
                  />
                  <svg
                    class="fill-current hidden w-4 h-4 text-twitter pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
              </div>
            </label>
            <div class="text-sm text-gray-400 mt-2">
              Jika ini diaktifkan, Anda akan mengetahui apa saja yang sedang
              terjadi di sekitar Anda sekarang.
            </div>
          </div>
          <nuxt-link
            to="/settings/trends/location"
            class="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-twitter-hover transition duration-300"
          >
            <div class="flex flex-col justify-between">
              <div class="text-base">Jelajahi Lokasi</div>
              <div class="text-sm text-gray-400">Indonesia</div>
            </div>
            <div class="">
              <svg
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
                class="fill-current text-gray-400"
              >
                <g>
                  <path
                    d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"
                  ></path>
                </g>
              </svg>
            </div>
          </nuxt-link>
          <div class="h-2 flex w-full bg-twitter-input"></div>
          <div class="text-xl font-extrabold px-4 py-2">Personalisasi</div>
          <div class="flex flex-col px-4 py-2 relative mt-1">
            <label
              class="flex justify-between items-start cursor-pointer group"
            >
              <div class="select-none my-1">Tampilkan konten di lokasi ini</div>
              <div
                class="group-hover:bg-twitter-secondary-hover rounded-full flex items-center justify-center p-3 absolute right-0 top-0 mr-2"
              >
                <div
                  class="bg-white border-2 rounded-lg cursor-pointer border-twitter w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500"
                >
                  <input
                    type="checkbox"
                    class="opacity-0 absolute bg-twitter"
                  />
                  <svg
                    class="fill-current hidden w-4 h-4 text-twitter pointer-events-none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                  </svg>
                </div>
              </div>
            </label>
            <div class="text-sm text-gray-400 mt-2">
              Anda dapat menyesuaikan tren berdasarkan lokasi Anda dan siapa
              yang Anda ikuti.
            </div>
          </div>
        </template>
        <template #footer> </template>
      </card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TweetSection from "~/components/Main/TweetSection.vue";
import Prompt from "~/components/Main/Prompt.vue";
import Card from "~/components/Main/Card.vue";
export default {
  components: { TweetSection, Prompt, Card },
  computed: { ...mapState(["tweet"]) },
  methods: {
    // showModal(payload) {
    //   this.tweet.tweet != ""
    //     ? this.$store.commit("tweet/savePrompt", true)
    //     : this.$router.back();
    // },
    // savePrompt(payload) {
    //   payload
    //     ? (this.$store.commit("tweet/savePrompt", false), this.$router.back())
    //     : (this.$store.commit("tweet/savePrompt", false),
    //       this.$store.commit("tweet/tweet", ""),
    //       this.$router.back());
    // },
  },
};
</script>

<style>
input:checked + svg {
  display: block;
}
</style>
