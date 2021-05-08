<template>
  <!-- <portal to="target"> -->
  <div
    class="w-full h-full bg-white bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden"
  >
    <card class="w-full h-full md:h-min md:w-1/2 2xl:w-1/3 p-0 text-white">
      <template #header class="">
        <div class="flex items-center">
          <span class="cursor-pointer rounded-full p-3 hover:bg-twitter-hover">
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
        <div class="flex flex-col px-4 py-2">
          <div class="justify-between items-center flex">
            <label class="select-none container block relative cursor-pointer"
              >Tampilkan konten di lokasi ini
              <input
                class="absolute opacity-0 right-0 top-0 cursor-pointer"
                type="checkbox"
                checked="checked"
              />
              <span
                class="h-5 w-5 checkmark absolute top-px right-0 rounded ring ring-twitter-thread"
              ></span>
            </label>
          </div>
          <div class="text-sm text-gray-400 mt-2">
            Jika ini diaktifkan, Anda akan mengetahui apa saja yang sedang
            terjadi di sekitar Anda sekarang.
          </div>
        </div>
      </template>
    </card>
    <!-- <portal to="prompt"> -->
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
    <!-- </portal> -->
  </div>
  <!-- </portal> -->
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
.container input:checked ~ .checkmark {
  background-color: #1da1f2;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
