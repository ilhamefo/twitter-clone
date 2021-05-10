<template>
  <div class="grid grid-flow-col grid-cols-4 max-h-16 border-b border-gray-600">
    <nuxt-link
      :to="{ name: 'username-index' }"
      active-class=""
      exact-active-class="border-b-2 border-twitter text-twitter"
      class="flex justify-center items-center px-2 py-4 font-semibold text-gray-400 hover:bg-twitter-hover hover:text-twitter cursor-pointer transition duration-300"
    >
      Tweet
    </nuxt-link>
    <nuxt-link
      exact-active-class="border-b-2 border-twitter text-twitter"
      :to="{
        name: 'username-index-with_replies',
        params: $route.params.username,
      }"
      class="flex justify-center items-center px-2 py-4 font-semibold text-gray-400 hover:bg-twitter-hover hover:text-twitter cursor-pointer transition duration-300"
    >
      Tweet dan Balasan
    </nuxt-link>
    <nuxt-link
      exact-active-class="border-b-2 border-twitter text-twitter"
      :to="{
        name: 'username-index-media',
        params: $route.params.username,
      }"
      class="flex justify-center items-center px-2 py-4 font-semibold text-gray-400 hover:bg-twitter-hover hover:text-twitter cursor-pointer transition duration-300"
    >
      Media
    </nuxt-link>
    <nuxt-link
      exact-active-class="border-b-2 border-twitter text-twitter"
      :to="{
        name: 'username-index-likes',
        params: $route.params.username,
      }"
      class="flex justify-center items-center px-2 py-4 font-semibold text-gray-400 hover:bg-twitter-hover hover:text-twitter cursor-pointer transition duration-300"
    >
      Suka
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {},
};
</script>

<style>
</style>
