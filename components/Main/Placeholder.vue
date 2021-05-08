<template>
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
</template>

<script>
export default {};
</script>

<style>
</style>
