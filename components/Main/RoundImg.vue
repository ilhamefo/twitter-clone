<template>
  <div
    :class="`rounded-full overflow-hidden h-${size} w-${size} flex items-center`"
  >
    <slot>
      <img :src="require('~/assets/images/user-profile.jpg')" alt="" class="" />
    </slot>
  </div>
</template>

<script>
export default {
  props: ["size"],
};
</script>

<style>
</style>
