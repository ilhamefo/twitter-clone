<template>
  <div
    class="grid grid-cols-1 grid-flow-row auto-rows-max divide-y divide-gray-600"
  >
    <div
      class="flex justify-between items-center px-4 py-2 flex-grow hover:bg-twitter-hover cursor-pointer transition duration-300"
    >
      <span class="">Permintaan pesan</span>
      <span class="">
        <svg
          height="20px"
          width="20px"
          viewBox="0 0 24 24"
          class="fill-current text-gray-500"
        >
          <g>
            <path
              d="M17.207 11.293l-7.5-7.5c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L15.086 12l-6.793 6.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z"
            ></path>
          </g>
        </svg>
      </span>
    </div>
    <div
      class="flex justify-between items-center px-4 py-4 flex-grow hover:bg-twitter-hover cursor-pointer transition duration-300"
      v-for="i in 20"
      :key="i"
    >
      <div class="flex flex-1 overflow-hidden">
        <round-img :size="12" class="mr-2 flex-shrink-0"></round-img>
        <div class="flex flex-col justify-center">
          <div class="flex">
            <span class="font-bold text-white hidden xl:flex mr-1">eof</span>
            <span class="text-gray-500 hidden xl:flex">@ilhamefo</span>
          </div>
          <p class="whitespace-nowrap text-gray-400 w-1/2 truncate max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            voluptate doloremque? Alias sapiente aut aperiam temporibus, dolore
            eveniet cupiditate deserunt a nam vel ipsa rem nihil magni hic ullam
            tempore.
          </p>
        </div>
      </div>
      <div
        class="flex-none text-gray-400 flex flex-col justify-start items-start h-full"
      >
        07 Mei 2021
      </div>
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
export default {
  components: { RoundImg },
};
</script>

<style>
</style>
