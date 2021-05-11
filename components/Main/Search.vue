<template>
  <div class="bg-twitter-bg w-full z-20 py-2">
    <div
      class="w-full rounded-full flex items-center overflow-hidden bg-twitter-input focus-within:bg-twitter-bg focus-within:ring-1 focus-within:ring-twitter relative"
    >
      <div class="pl-4">
        <svg
          height="20px"
          width="20px"
          viewBox="0 0 24 24"
          class="fill-current text-gray-400 focus-within:fill-current focus-within:text-twitter"
        >
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
            ></path>
          </g>
        </svg>
      </div>
      <input
        type="text"
        class="appearance-none focus:outline-none flex-grow bg-twitter-input p-3 focus:bg-twitter-bg"
        :placeholder="props.placeholder"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
        @focus="show = true"
        @blur="show = false"
      />
    </div>
    <div class="flex flex-col w-full absolute top-12 left-0" v-if="show">
      <div
        class="bg-twitter-bg rounded-lg grid divide-y divide-gray-700 m-3 overflow-hidden shadow-white"
      >
        <div class="flex justify-between items-center p-3">
          <div class="text-xl font-bold">Terkini</div>
          <button
            class="focus:outline-none rounded-full px-4 py-2 hover:bg-twitter-hover text-sm font-bold text-twitter"
          >
            Hapus semua
          </button>
        </div>
        <div
          class="flex justify-between items-center p-3 hover:bg-twitter-gray cursor-pointer"
        >
          <div class="flex">
            <round-img :size="10" class="mr-3"></round-img>
            <div class="flex flex-col justify-between">
              <div class="text-base font-bold">eof</div>
              <div class="text-gray-400">@ilhamefo</div>
            </div>
          </div>
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
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
export default {
  props: ["props", "value"],
  components: { RoundImg },
  data: () => ({
    show: false,
  }),
};
</script>

<style>
</style>
