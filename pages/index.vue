<template>
  <div class="flex xl:w-9/12 w-full text-white">
    <NuxtChild />

    <!-- tengah -->
    <mid-section>
      <template #header>
        <div class="flex justify-center items-center">
          <round-img :size="8" class="sm:hidden ml-2"></round-img>

          <div class="font-extrabold text-lg p-3">Tweet Terbaru</div>
        </div>
        <a
          href="#"
          class="rounded-full hover:bg-twitter-hover p-3 transition duration-300 mr-2"
        >
          <svg
            height="24px"
            width="24px"
            viewBox="0 0 24 24"
            class="fill-current text-twitter"
          >
            <g>
              <path
                d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
              ></path>
            </g>
          </svg>
        </a>
      </template>
      <template #content>
        <tweet-section></tweet-section>
        <divider></divider>
        <tweet v-for="i in 3" :key="i"></tweet>
        <tweet-with-media></tweet-with-media>
      </template>
    </mid-section>
    <!-- kanan -->
    <right-side></right-side>
    <message></message>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Tweet from "~/components/Main/Tweet.vue";
import TweetSection from "~/components/Main/TweetSection.vue";
import Divider from "~/components/Main/Divider.vue";
import RightSide from "~/components/Main/RightSide.vue";
import MidSection from "~/components/Main/MidSection.vue";
export default {
  components: {
    Tweet,
    TweetSection,
    RightSide,
    Divider,
    MidSection,
    TweetWithMedia: () => import("~/components/Main/TweetWithMedia.vue"),
    RoundImg: () => import("~/components/Main/RoundImg.vue"),
    Message: () => import("~/components/Main/Message.vue"),
  },
  computed: {
    ...mapState(["data", "recommendation"]),
  },
  head() {
    return {
      title: "Tweet Terbaru / Twitter",
    };
  },
  data() {
    return { tweet: "" };
  },
  methods: {
    test(e) {
      e.target.style.height = "auto";
      e.target.style.height = `${e.target.scrollHeight}px`;
    },
  },

  created() {
    if (this.$route.path == "/") {
      this.$router.push("/home");
    }
  },
};
</script>

<style>
</style>
