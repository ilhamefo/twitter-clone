<template>
  <div
    class="max-w-xs py-7 px-5 bg-twitter-bg flex flex-col justify-center items-center rounded-xl z-50"
    @click.stop=""
  >
    <span class="text-white font-bold text-xl">
      <slot name="title"></slot>
    </span>
    <p class="text-center text-sm mt-3 leading-5 text-gray-400">
      <slot name="desc"></slot>
    </p>
    <div class="grid grid-cols-2 grid-rows-1 gap-2 w-full mt-3">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
