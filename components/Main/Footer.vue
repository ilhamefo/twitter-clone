<template>
  <div class="flex flex-wrap max-w-max px-5 py-4">
    <a
      href="#"
      class="text-sm text-gray-500 hover:underline mr-3"
      v-for="(item, i) in items"
      :key="i"
    >
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Persyaratan Layanan",
        "Kebijakan Privasi",
        "Kebijakan Penggunaan Kuki",
        "Informasi iklan",
        "Selengkapnya",
        "© 2021 Twitter, Inc.",
      ],
    };
  },
};
</script>

<style>
</style>
