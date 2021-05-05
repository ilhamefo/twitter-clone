<template>
  <div class="bg-trending-bg mt-5 flex flex-col rounded-xl overflow-hidden">
    <div class="grid grid-cols-1 divide-y-2 divide-gray-700">
      <div class="flex justify-between items-center py-3 px-4">
        <div class="text-xl font-extrabold text-white">
          <slot name="header">Header</slot>
        </div>
        <slot name="icon"></slot>
      </div>
      <!-- loops start here -->
      <slot name="content"></slot>

      <div
        class="flex flex-col justify-between items-center p-3 hover:bg-twitter-input cursor-pointer transition duration-300 relative"
      >
        <div class="flex justify-between items-center w-full">
          <div class="text-sm text-twitter">
            <slot name="footer">Tampilkan Lebih Banyak</slot>
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
