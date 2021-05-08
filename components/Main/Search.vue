<template>
  <div class="bg-twitter-bg w-full z-20 py-2">
    <div
      class="w-full rounded-full flex items-center overflow-hidden bg-twitter-input focus-within:bg-twitter-bg focus-within:ring-1 focus-within:ring-twitter"
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
        placeholder="Cari di Twitter"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
