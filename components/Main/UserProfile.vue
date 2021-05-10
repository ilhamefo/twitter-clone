<template>
  <div class="flex flex-col">
    <div class="flex h-60">
      <img
        src="https://images.unsplash.com/photo-1620332785080-0469cb68f57d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        class="object-cover h"
      />
    </div>
    <div class="relative p-4">
      <round-img
        :size="32"
        class="ring-4 ring-twitter-bg absolute -top-16"
      ></round-img>
      <div class="flex justify-end items-center">
        <button
          class="rounded-full border border-twitter px-4 py-2 focus:outline-none text-twitter font-bold"
        >
          Edit profil
        </button>
      </div>
      <div class="my-3 flex flex-col justify-between">
        <div class="text-xl font-extrabold">eof</div>
        <div class="text-base text-gray-400">@ilhamefo</div>
      </div>
      <div class="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
        asperiores!
      </div>
      <div class="flex justify-start items-start mb-2">
        <span class="flex items-center justify-center">
          <svg
            height="26px"
            width="26px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-gray-400 text-center"
          >
            <g>
              <path
                d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"
              ></path>
              <path
                d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"
              ></path>
            </g>
          </svg>
        </span>
        <span class="text-gray-400 mr-3"> Lahir 17 Juni 1998 </span>
        <span class="flex items-center justify-center">
          <svg
            height="26px"
            width="26px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-gray-400 text-center"
          >
            <g>
              <path
                d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
              ></path>
              <circle cx="7.032" cy="8.75" r="1.285"></circle>
              <circle cx="7.032" cy="13.156" r="1.285"></circle>
              <circle cx="16.968" cy="8.75" r="1.285"></circle>
              <circle cx="16.968" cy="13.156" r="1.285"></circle>
              <circle cx="12" cy="8.75" r="1.285"></circle>
              <circle cx="12" cy="13.156" r="1.285"></circle>
              <circle cx="7.032" cy="17.486" r="1.285"></circle>
              <circle cx="12" cy="17.486" r="1.285"></circle>
            </g>
          </svg>
        </span>
        <span class="text-gray-400"> Bergabung April 2012 </span>
      </div>
      <div class="mb-2 flex">
        <div class="flex group cursor-pointer">
          <div class="font-bold mr-1 group-hover:underline">108</div>
          <div class="text-gray-400 mr-3 group-hover:underline">Mengikuti</div>
        </div>
        <div class="flex group cursor-pointer">
          <div class="font-bold mr-1 group-hover:underline">4.683</div>
          <div class="text-gray-400 mr-3 group-hover:underline">Pengikut</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
export default {
  components: {
    RoundImg,
  },
  computed: {},
  mounted() {},
};
</script>

<style>
</style>

