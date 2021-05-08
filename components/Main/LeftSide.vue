<template>
  <div
    class="sm:flex hidden justify-start sm:justify-end w-1/12 md:w-2/12 xl:w-3/12 2xl:w-4/12 h-screen"
  >
    <div
      class="flex flex-col justify-between items-center w-min xl:w-3/6 h-screen"
    >
      <div class="flex flex-col justify-center items-end xl:items-start">
        <logo></logo>
        <side-bar></side-bar>
      </div>
      <user-button></user-button>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import SideBar from "./SideBar.vue";
export default {
  components: {
    SideBar,
    Logo,
    UserButton: () => import("./UserButton.vue"),
  },
};
</script>

<style>
</style>
