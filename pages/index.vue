<template>
  <div class="">
    <unfollow-modal v-if="data.showModalUnfollow"></unfollow-modal>
    <div class="flex bg-twitter-bg relative">
      <div
        class="sm:flex hidden justify-start sm:justify-end w-1/12 md:w-2/12 xl:w-3/12 2xl:w-4/12 h-screen relative"
      >
        <left-side class="fixed left-0 md:-left-12"></left-side>
      </div>
      <div class="flex xl:w-9/12 w-full text-white">
        <div
          class="flex flex-col w-6/12 flex-grow relative border-r-2 sm:border-l-2 border-gray-700"
        >
          <!-- <div class="absolute flex items-center justify-center">
          <div class="">Test</div>
        </div> -->
          <div
            class="border-b-2 border-gray-700 bg-twitter-bg flex justify-between items-center sticky top-0"
          >
            <div class="flex justify-center items-center">
              <div
                class="rounded-full overflow-hidden h-8 w-8 sm:hidden flex items-center ml-4"
              >
                <img
                  :src="require('~/assets/images/user-profile.jpg')"
                  alt=""
                />
              </div>
              <div class="font-extrabold text-lg p-3">Tweet Terbaru</div>
            </div>
            <a
              href="#"
              class="rounded-full hover:bg-twitter-hover p-3 transition duration-300"
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
          </div>

          <tweet-section></tweet-section>

          <!-- div -->
          <div
            class="h-3 w-full bg-twitter-gray border-b border-gray-700"
          ></div>

          <tweet></tweet>
          <tweet-with-media></tweet-with-media>
        </div>

        <right-side></right-side>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "~/components/Main/LeftSide.vue";
import RightSide from "~/components/Main/RightSide.vue";
import Tweet from "~/components/Main/Tweet.vue";
import TweetSection from "~/components/Main/TweetSection.vue";
import TweetWithMedia from "~/components/Main/TweetWithMedia.vue";
import UnfollowModal from "~/components/Main/UnfollowModal.vue";
import { mapState } from "vuex";
export default {
  components: {
    LeftSide,
    TweetSection,
    Tweet,
    TweetWithMedia,
    RightSide,
    UnfollowModal,
  },
  computed: {
    ...mapState(["data"]),
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
};
</script>

<style>
</style>
