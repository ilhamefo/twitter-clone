<template>
  <div class="w-full px-4 py-2 flex border-gray-700">
    <div class="flex mr-5">
      <round-img :size="12"></round-img>
    </div>
    <div class="flex flex-col w-full">
      <textarea
        class="w-full appearance-none bg-twitter-bg focus:outline-none text-xl resize-none my-4"
        placeholder="Apa yang sedang terjadi?"
        ref="tweetForm"
        rows="1"
        @input="test"
        v-model="tweet"
      ></textarea>

      <div class="border-b border-gray-700">
        <a
          href="#"
          class="px-1 py-1 hover:bg-twitter-hover rounded-full flex items-center max-w-max mb-3"
        >
          <svg
            height="20px"
            width="20px"
            viewBox="0 0 24 24"
            class="fill-current text-twitter mr-2"
          >
            <g>
              <path
                d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zM9.047 5.9c-.878.484-1.22.574-1.486.858-.263.284-.663 1.597-.84 1.712-.177.115-1.462.154-1.462.154s2.148 1.674 2.853 1.832c.706.158 2.43-.21 2.77-.142.342.07 2.116 1.67 2.324 2.074.208.404.166 1.748-.038 1.944-.204.196-1.183 1.09-1.393 1.39-.21.3-1.894 4.078-2.094 4.08-.2 0-.62-.564-.73-.848-.11-.284-.427-4.012-.59-4.263-.163-.25-1.126-.82-1.276-1.026-.15-.207-.552-1.387-.527-1.617.024-.23.492-1.007.374-1.214-.117-.207-2.207-1.033-2.61-1.18-.403-.145-.983-.332-.983-.332 1.13-3.652 4.515-6.318 8.52-6.38 0 0 .125-.018.186.14.11.286.256 1.078.092 1.345-.143.23-2.21.99-3.088 1.474zm11.144 8.24c-.21-.383-1.222-2.35-1.593-2.684-.23-.208-2.2-.912-2.55-1.09-.352-.177-1.258-.997-1.267-1.213-.01-.216 1.115-1.204 1.15-1.524.056-.49-1.882-1.835-1.897-2.054-.015-.22.147-.66.31-.81.403-.36 3.19.04 3.556.36 2 1.757 3.168 4.126 3.168 6.873 0 .776-.18 1.912-.282 2.18-.08.21-.443.232-.595-.04z"
              ></path>
            </g>
          </svg>
          <span class="text-twitter font-bold text-sm whitespace-nowrap"
            >Semua orang dapat membalas
          </span>
        </a>
      </div>
      <!-- icons -->
      <icons>
        <template #button>
          <button
            type="button"
            class="transition duration-500 text-center py-2 px-5 bg-twitter rounded-full focus:outline-none font-bold text-white text-base disabled:opacity-30 hover:bg-twitter-btn-hover"
            :disabled="tweet == '' ? true : false"
          >
            Tweet
          </button>
        </template>
        <template #loading>
          <client-only>
            <loading :input="count"></loading>
          </client-only>
        </template>
      </icons>
    </div>
  </div>
</template>

<script>
import Icons from "./Icons.vue";
import RoundImg from "./RoundImg.vue";
import { mapState } from "vuex";
export default {
  components: {
    Icons,
    RoundImg,
    Loading: () => import("~/components/Main/Loading.vue"),
  },
  data() {
    return {};
  },
  computed: {
    count: function () {
      return this.tweet.length;
    },
    percent: function () {
      return Math.round((this.tweet.length / 280) * 100);
    },
    ...mapState(["tweet"]),
    tweet: {
      get() {
        return this.$store.state.tweet.tweet;
      },
      set(value) {
        this.$store.commit("tweet/tweet", value);
      },
    },
  },
  methods: {
    test(e) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
  },
};
</script>

<style>
</style>
