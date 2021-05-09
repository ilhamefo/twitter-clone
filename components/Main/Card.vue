<template>
  <div class="bg-trending-bg flex flex-col rounded-xl overflow-hidden">
    <div class="grid grid-cols-1 divide-y-2 divide-gray-700">
      <div class="flex justify-between items-center py-3 px-4">
        <div class="text-xl font-extrabold text-white">
          <slot name="header"> Header </slot>
        </div>
        <slot name="icon"></slot>
      </div>
      <!-- loops start here -->
      <slot name="content">
        <div class="flex justify-center items-center p-10">
          <svg
            height="40px"
            width="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            class="animate-spin"
          >
            <g>
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="14"
                stroke-width="4"
                style="stroke: rgb(29, 161, 242); opacity: 0.2"
              ></circle>
            </g>
            <g class="circle__svg-circle">
              <circle
                cx="16"
                cy="16"
                fill="none"
                r="14"
                stroke-width="4"
                style="
                  stroke: rgb(29, 161, 242);
                  stroke-dasharray: 80px;
                  stroke-dashoffset: 60px;
                "
              ></circle>
            </g>
          </svg>
        </div>
      </slot>

      <div
        class="flex flex-col justify-between items-center p-3 hover:bg-twitter-input cursor-pointer transition duration-300 relative"
      >
        <div class="flex justify-between items-center w-full">
          <div class="text-sm text-twitter">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
