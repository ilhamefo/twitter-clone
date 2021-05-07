<template>
  <div
    class="max-h-96 py-3 w-72 bg-twitter-bg absolute bottom-20 mb-3 shadow-white rounded-2xl text-white grid grid-cols-1 grid-flow-row auto-rows-max gap-1 divide-y divide-gray-600 cursor-pointer"
  >
    <div
      class="px-3 py-2 flex justify-between items-center"
      v-for="(user, i) in users"
      :key="i"
      :class="[
        user.active
          ? 'py-3 cursor-default'
          : 'hover:bg-twitter-gray transition duration-300',
      ]"
    >
      <div class="flex items-center">
        <round-img :size="12" class="xl:mr-3"></round-img>
        <div class="flex flex-col xl:mr-16">
          <div class="font-bold text-white hidden xl:flex">
            {{ user.displayName }}
          </div>
          <div class="text-gray-500 hidden xl:flex">{{ user.username }}</div>
        </div>
      </div>
      <span class="" v-if="user.active"
        ><svg
          height="20px"
          width="20px"
          viewBox="0 0 24 24"
          class="fill-current text-twitter"
        >
          <g>
            <path
              d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"
            ></path>
          </g></svg
      ></span>
    </div>
    <div
      class="px-3 py-3 flex justify-between items-center hover:bg-twitter-gray transition duration-300"
    >
      Tambahkan akun yang sudah ada
    </div>
    <div
      class="px-3 py-3 flex justify-between items-center hover:bg-twitter-gray transition duration-300"
    >
      Kelola akun
    </div>
    <div
      class="px-3 py-3 flex justify-between items-center hover:bg-twitter-gray transition duration-300"
    >
      Keluar dari
      {{ activeUser[0].username }}
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
export default {
  components: {
    RoundImg,
  },
  data: () => {
    return {
      users: [
        {
          username: "@ilhamefo",
          displayName: "eof",
          active: true,
        },
        {
          username: "@secondaryaccount",
          displayName: "John Doe",
          active: false,
        },
      ],
    };
  },
  computed: {
    activeUser: function () {
      return this.users.filter((user) => user.active == true);
    },
  },
};
</script>

<style >
</style>
