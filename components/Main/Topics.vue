<template>
  <card>
    <template #header>Topik untuk diikuti</template>
    <template #content>
      <div
        class="flex justify-between items-center py-3 px-4 hover:bg-twitter-input cursor-pointer transition duration-300"
        v-for="(item, i) in topics"
        :key="i"
      >
        <div class="flex flex-col flex-grow max-w-max">
          <span
            class="font-bold hover:underline whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {{ item.title }}
          </span>
          <span class="text-base text-gray-400">{{ item.desc }}</span>
        </div>
        <div class="flex items-center">
          <button
            ref="buttonFollow"
            class="focus:outline-none"
            :class="[
              'ring-1 ring-twitter rounded-full px-3 py-1 text-twitter font-bold hover:bg-twitter-secondary-hover',
            ]"
            type="button"
          >
            {{ "Ikuti" }}
          </button>
          <button
            type="button"
            class="p-2 hover:bg-twitter-hover rounded-full flex items-center justify-center ml-1 focus:outline-none"
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
          </button>
        </div>
      </div>
    </template>
    <template #footer>Tampilkan lebih banyak</template>
  </card>
</template>

<script>
import Card from "./Card.vue";
import RoundImg from "./RoundImg.vue";
export default {
  components: {
    Card,
    RoundImg,
  },
  data() {
    return {
      topics: [
        {
          title: "Kreator digital",
          desc: "Hiburan",
        },
        {
          title: "BTS",
          desc: "Group K-pop",
        },
        {
          title: "NCT",
          desc: "Group K-pop",
        },
        {
          title: "K-pop",
          desc: "Genre musik",
        },
      ],
    };
  },
};
</script>

<style>
</style>
