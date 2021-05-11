<template>
  <div class="flex xl:w-9/12 w-full text-white overflow-visible">
    <mid-section>
      <template #header>
        <search :props="props" class="px-3 py-1"></search>
      </template>
      <template #content class="relative">
        <div class="max-h-80 flex relative">
          <img
            src="https://images.unsplash.com/photo-1562442507-cfa3c80f9c03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2024&q=80"
            class="object-cover"
          />
          <div
            class="flex flex-col justify-end w-full absolute bg-gradient-to-t from-black bottom-0 h-1/2 p-3"
          >
            <div class="filter drop-shadow-lg">Eid mubarak · LIVE</div>
            <div class="filter drop-shadow-lg text-3xl font-extrabold">
              Selamat Hari Raya Idul Fitri di Indonesia
            </div>
          </div>
        </div>
        <divider></divider>
        <div class="grid divide-y divide-gray-700 border-b border-gray-700">
          <div class="flex p-3">
            <div class="text-xl font-extrabold text-white">Tren untuk Anda</div>
          </div>
          <div
            class="flex flex-col justify-between items-center p-3 hover:bg-twitter-hover cursor-pointer transition duration-300 relative"
            v-for="(item, i) in trending.trendings"
            :key="item.id"
          >
            <button
              type="button"
              class="focus:outline-none p-2 hover:bg-twitter-secondary-hover rounded-full absolute top-3 right-3"
            >
              <svg
                height="18px"
                width="18px"
                viewBox="0 0 24 24"
                class="fill-current text-gray-400"
              >
                >
                <g>
                  <circle cx="5" cy="12" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="19" cy="12" r="2"></circle>
                </g>
              </svg>
            </button>
            <div class="flex justify-between items-center w-full">
              <div class="text-xs text-gray-400">{{ i + 1 }} · Populer</div>
            </div>
            <div class="flex items-center w-full">
              <span class="font-extrabold">{{ item.tag }}</span>
            </div>
            <div class="flex items-center w-full">
              <div class="text-xs text-gray-400">
                {{ item.tweetCount }} Tweet
              </div>
            </div>
          </div>
          <div class="flex p-3 cursor-pointer hover:bg-twitter-gray">
            <div class="text-twitter">Tampilkan lainnya</div>
          </div>
        </div>
      </template>
    </mid-section>
    <right-side>
      <template #search>
        <div class=""></div>
      </template>
      <template #trending>
        <div class=""></div>
      </template>
      <template #topics>
        <div class=""></div>
      </template>
    </right-side>
  </div>
</template>

<script>
import Divider from "~/components/Main/Divider.vue";
import MidSection from "~/components/Main/MidSection.vue";
import RightSide from "~/components/Main/RightSide.vue";
import Search from "~/components/Main/Search.vue";
import { mapState } from "vuex";

export default {
  head: () => ({
    title: "Jelajahi / Twitter",
  }),
  data: () => ({
    props: {
      placeholder: "Cari di Twitter",
    },
  }),
  computed: {
    ...mapState(["trending"]),
  },
  components: { MidSection, RightSide, Search, Divider },
  mounted() {
    this.$store.dispatch("trending/getTrendings");
  },
};
</script>


<style>
</style>
