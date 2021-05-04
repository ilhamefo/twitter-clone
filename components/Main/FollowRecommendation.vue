<template>
  <div class="bg-trending-bg mt-5 flex flex-col rounded-xl overflow-hidden">
    <div class="grid grid-cols-1 divide-y-2 divide-gray-700">
      <div class="flex justify-between items-center py-3 px-4">
        <div class="text-xl font-extrabold">Untuk diikuti</div>
      </div>
      <!-- loops start here -->
      <div
        class="flex justify-between items-center py-3 px-4 hover:bg-twitter-input cursor-pointer transition duration-300 relative"
        v-for="item in recommendation"
        :key="item.id"
      >
        <div class="flex items-center justify-start">
          <div
            class="rounded-full overflow-hidden h-12 w-12 flex items-center mr-3 flex-grow"
          >
            <img
              :src="require('~/assets/images/user-profile.jpg')"
              alt=""
              class=""
            />
          </div>
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
            @mouseenter="mouseHandler($event, true, item.isFollowing)"
            @mouseleave="mouseHandler($event, false, item.isFollowing)"
          >
            {{ (btnText = item.isFollowing ? "Mengikuti" : "Ikuti") }}
          </button>
        </div>
      </div>
      <div
        class="flex flex-col justify-between items-center p-3 hover:bg-twitter-input cursor-pointer transition duration-300 relative"
      >
        <div class="flex justify-between items-center w-full">
          <div class="text-sm text-twitter">Tampilkan lebih banyak</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      btnText: "",
      btnStyle: "",
      recommendation: null,
    };
  },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    changeBtnState(user, state) {
      if (!state) {
        this.$store.commit("showModalUnfollow", true);
      }
      this.$axios
        .$patch(`http://localhost:3004/recommendation/${user.id}`, {
          isFollowing: state,
        })
        .then(() => {
          this.getRecommendation();
        });
    },
    mouseHandler(e, status, state) {
      if (state) {
        switch (status) {
          case true:
            e.target.innerHTML = "Setop Ikuti";
            break;
          case false:
            e.target.innerHTML = "Mengikuti";
            break;

          default:
            break;
        }
      } else {
        e.target.innerHTML = "Ikuti";
      }
    },
    getRecommendation(id = "") {
      this.$axios
        .$get(`http://localhost:3004/recommendation/${id}`)
        .then((response) => {
          this.recommendation = response;
        });
    },
  },

  created() {
    this.getRecommendation();
  },
};
</script>

<style>
</style>
