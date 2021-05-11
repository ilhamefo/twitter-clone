<template>
  <div
    class="w-full h-full bg-gray-500 bg-opacity-30 z-30 flex justify-center items-center fixed overflow-hidden left-0"
    @click="$router.back()"
  >
    <div
      class="p-3 hover:bg-twitter-hover rounded-full flex items-center justify-center fixed left-5 top-5 cursor-pointer"
    >
      <svg
        height="20px"
        width="20px"
        viewBox="0 0 24 24"
        class="fill-current text-white"
      >
        <g>
          <path
            d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
          ></path>
        </g>
      </svg>
    </div>

    <div @click.stop>
      <round-img :size="80">
        <img :src="users.userSelected.image" alt="" />
      </round-img>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RoundImg from "~/components/Main/RoundImg.vue";
export default {
  computed: {
    ...mapState(["users"]),
  },
  components: { RoundImg },
};
</script>

<style>
</style>

