<template>
  <div class="rounded-full overflow-hidden h-12 w-12 flex items-center">
    <slot>
      <img :src="require('~/assets/images/user-profile.jpg')" alt="" class="" />
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
