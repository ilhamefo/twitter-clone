<template>
  <div class="flex justify-end xl:justify-start">
    <div
      class="xl:max-w-max max-w-min xl:px-2 xl:py-2.5 p-2 flex justify-between items-center hover:bg-twitter-hover rounded-full mb-3 cursor-pointer transition duration-300"
    >
      <div class="flex items-center">
        <div
          class="rounded-full overflow-hidden h-10 w-10 flex items-center xl:mr-5"
        >
          <img :src="require('~/assets/images/user-profile.jpg')" alt="" />
        </div>
        <div class="flex flex-col xl:mr-16">
          <span class="font-bold text-white hidden xl:flex">eof</span>
          <span class="text-gray-500 hidden xl:flex">@ilhamefo</span>
        </div>
      </div>
      <span class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFF"
          class="hidden xl:flex"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
