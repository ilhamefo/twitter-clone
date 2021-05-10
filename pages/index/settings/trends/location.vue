<template>
  <div
    class="w-full h-full bg-white bg-opacity-10 z-50 flex justify-center items-center fixed overflow-hidden left-0"
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
                    d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                  ></path>
                </g>
              </svg>
            </span>
            <div class="">Lokasi</div>
          </div>
        </template>
        <template #content>
          <search
            class="p-2"
            :props="props"
            v-bind:value="searchText"
            v-on:input="searchText = $event"
          ></search>
        </template>
        <template #footer> </template>
      </card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {
    TweetSection: () =>
      import(/* webpackPrefetch: true */ "~/components/Main/TweetSection.vue"),
    Prompt: () =>
      import(/* webpackPrefetch: true */ "~/components/Main/Prompt.vue"),
    Card: () =>
      import(/* webpackPrefetch: true */ "~/components/Main/Card.vue"),
    Search: () =>
      import(/* webpackPrefetch: true */ "~/components/Main/Search.vue"),
  },
  computed: { ...mapState(["tweet"]) },
  methods: {},
  data() {
    return {
      props: {
        placeholder: "Cari Lokasi",
      },
      searchText: "Indonesia",
    };
  },
};
</script>

<style>
input:checked + svg {
  display: block;
}
</style>
