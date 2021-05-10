<template>
  <div class="flex xl:w-9/12 w-full text-white">
    <mid-section>
      <template #header>
        <div class="flex justify-center items-center">
          <a
            href="#"
            class="rounded-full hover:bg-twitter-hover p-3 transition duration-300 mx-2"
          >
            <svg
              height="24px"
              width="24px"
              viewBox="0 0 24 24"
              class="fill-current text-twitter"
            >
              <g>
                <path
                  d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                ></path>
              </g>
            </svg>
          </a>
          <div class="flex flex-col p-1 justify-between">
            <div class="font-extrabold text-lg">eof</div>
            <div class="text-gray-500 text-sm">4.299 Tweet</div>
          </div>
        </div>
      </template>
      <template #content>
        <user-profile></user-profile>
      </template>
    </mid-section>
    <right-side></right-side>
  </div>
</template>

<script>
import MidSection from "~/components/Main/MidSection.vue";
import RightSide from "~/components/Main/RightSide.vue";
import UserProfile from "~/components/Main/UserProfile.vue";
export default {
  components: { MidSection, RightSide, UserProfile },
  head() {
    return {
      title: "eof (@ilhamefo) / Twitter",
    };
  },
  mounted() {
    this.$route.name;
  },
};
</script>

<style>
</style>
