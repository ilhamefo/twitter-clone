<template>
  <div class="">
    <portal to="target">
      <unfollow-modal
        :user="recommendation.selected"
        v-if="recommendation.showModalUnfollow"
      ></unfollow-modal>
    </portal>
    <card>
      <template #header>Untuk Diikuti</template>
      <template #content>
        <client-only>
          <div
            class="flex justify-between items-center py-3 px-4 hover:bg-twitter-input cursor-pointer transition duration-300 relative"
            v-for="item in recommendation.recommendation"
            :key="item.id"
          >
            <div class="flex items-center justify-start">
              <round-img class="mr-3" :size="12">
                <img
                  :src="item.image"
                  :alt="`${item.displayName} profile picture`"
                />
              </round-img>

              <div class="flex flex-col flex-shrink max-w-min">
                <span
                  class="font-bold hover:underline whitespace-nowrap overflow-hidden overflow-ellipsis"
                >
                  {{ item.displayName }}
                </span>
                <span class="text-base text-gray-400">{{ item.username }}</span>
              </div>
            </div>
            <div class="flex">
              <button
                ref="buttonFollow"
                class="focus:outline-none"
                :class="[
                  item.isFollowing
                    ? 'ring-1 rounded-full px-3 py-1 bg-twitter font-bold hover:ring-1 hover:ring-red-500 hover:bg-red-500 text-white'
                    : 'ring-1 ring-twitter rounded-full px-3 py-1 text-twitter font-bold hover:bg-twitter-secondary-hover',
                ]"
                type="button"
                @click="changeBtnState(item, !item.isFollowing)"
                @mouseover="mouseOver($event, item.isFollowing)"
                @mouseleave="mouseLeave($event, item.isFollowing)"
              >
                {{ item.isFollowing ? "Mengikuti" : "Ikuti" }}
              </button>
            </div>
          </div>
        </client-only>
      </template>
      <template #footer>Tampilkan lebih banyak</template>
    </card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "./Card.vue";
import RoundImg from "./RoundImg.vue";
import UnfollowModal from "./UnfollowModal.vue";
export default {
  components: { UnfollowModal, Card, RoundImg },
  data() {
    return {
      btnText: "",
      btnStyle: "",
    };
  },
  computed: {
    ...mapState(["data", "recommendation"]),
  },
  methods: {
    changeBtnState(user, state) {
      if (!state) {
        this.showModal(user);
      } else {
        this.$store.dispatch("recommendation/fireFollow", user);
      }
    },

    showModal(user) {
      this.$store.commit("recommendation/showModalUnfollow", true);
      this.$store.commit("recommendation/selected", user);
    },

    mouseOver(e, isFollowing) {
      e.target.innerHTML = isFollowing ? "Setop Ikuti" : "Ikuti";
    },
    mouseLeave(e, isFollowing) {
      e.target.innerHTML = isFollowing ? "Mengikuti" : "Ikuti";
    },
  },

  created() {
    this.$store.dispatch("recommendation/getRecommendation");
  },
};
</script>

<style>
</style>
