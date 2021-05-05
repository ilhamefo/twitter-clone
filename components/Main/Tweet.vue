<template>
  <div
    class="flex flex-col hover:bg-tweet-hover transition duration-300 cursor-pointer border-b border-gray-700"
  >
    <div class="flex ml-14 mt-3 items-center" v-if="isRetweeted">
      <svg
        height="16px"
        width="16px"
        viewBox="0 0 24 24"
        class="fill-current text-gray-400 mr-2 font-bold"
      >
        <g>
          <path
            d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
          ></path>
        </g>
      </svg>
      <div class="text-gray-400 font-bold text-sm hover:underline">
        eof me-retweet
      </div>
    </div>

    <div class="flex w-full px-3 pt-2">
      <div class="flex flex-col items-center mr-5">
        <round-img></round-img>

        <div class="w-0.5 bg-twitter-thread flex-grow" v-if="isThread"></div>
      </div>
      <div class="flex flex-col w-full">
        <div class="flex justify-start items-center">
          <a href="#" class="mr-1 text-white font-bold hover:underline">izzy</a>
          <span class="mr-2">
            <svg
              height="18px"
              width="18px"
              viewBox="0 0 24 24"
              class="fill-current text-white"
              aria-label="Akun terverifikasi"
            >
              <g>
                <path
                  d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                ></path>
              </g>
            </svg>
          </span>
          <span class="mr-2 text-gray-500">@vngnc · </span>
          <span class="mr-2 text-gray-500 hover:underline"> 4mnt</span>
        </div>
        <!-- actual tweets here -->
        <span class="min-h-0 max-h-96 flex flex-col">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          laboriosam iure distinctio architecto, asperiores molestias, ullam
          optio dolor quasi possimus aut. Recusandae possimus, ad nobis
          laudantium ratione velit expedita molestias.
          <br />
          <br />
          👌👌😁😍
          <div
            w-full
            class="min-h-0 max-h-full items-center rounded-2xl mt-4 flex justify-center overflow-hidden"
            v-if="isEmbeded"
          >
            <div class="grid grid-cols-3 gap-1 grid-flow-col">
              <img
                :src="require('~/assets/images/user-profile.jpg')"
                class="object-cover w-full row-span-2 col-span-2"
              />
              <img
                :src="require('~/assets/images/user-profile.jpg')"
                class="object-cover w-full col-auto"
              />
              <img
                :src="require('~/assets/images/user-profile.jpg')"
                class="object-cover w-full col-auto"
              />
            </div>
          </div>
        </span>
        <div class="flex mt-2">
          <div class="grid grid-cols-4 gap-4 w-full">
            <div class="flex justify-start items-center group">
              <a href="#" class="p-2 rounded-full group-hover:bg-twitter-hover">
                <svg
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  class="fill-current text-gray-400 group-hover:text-twitter"
                >
                  <g>
                    <path
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                    ></path>
                  </g>
                </svg>
              </a>
              <span class="group-hover:text-twitter text-xs text-gray-400"
                >122</span
              >
            </div>
            <div class="flex justify-start items-center group">
              <a href="#" class="p-2 rounded-full group-hover:bg-twitter-hover">
                <svg
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  class="fill-current text-gray-400 group-hover:text-green-400"
                >
                  <g>
                    <path
                      d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                    ></path>
                  </g>
                </svg>
              </a>
              <span class="group-hover:text-green-400 text-xs text-gray-400"
                >332</span
              >
            </div>
            <div class="flex justify-start items-center group">
              <a href="#" class="p-2 rounded-full group-hover:bg-twitter-hover">
                <svg
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  class="fill-current text-gray-400 group-hover:text-pink-600"
                >
                  <g>
                    <path
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                    ></path>
                  </g>
                </svg>
              </a>
              <span class="group-hover:text-pink-600 text-xs text-gray-400"
                >332</span
              >
            </div>
            <div class="flex justify-start items-center group">
              <a href="#" class="p-2 rounded-full group-hover:bg-twitter-hover">
                <svg
                  height="18px"
                  width="18px"
                  viewBox="0 0 24 24"
                  class="fill-current text-gray-400 group-hover:text-twitter"
                >
                  <g>
                    <path
                      d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                    ></path>
                    <path
                      d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                    ></path>
                  </g>
                </svg>
              </a>
              <span class="group-hover:text-twitter text-xs text-gray-400"
                >332</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex w-full px-5 py-2 items-center hover:bg-gray-700 hover:bg-opacity-30"
      v-if="isThread"
    >
      <div class="flex mr-5">
        <div class="rounded-full overflow-hidden h-8 w-8 flex items-center">
          <img
            :src="require('~/assets/images/user-profile.jpg')"
            alt=""
            class=""
          />
        </div>
      </div>
      <div class="text-sm text-twitter">Tampilkan Utas Ini</div>
    </div>
  </div>
</template>

<script>
import RoundImg from "./RoundImg.vue";
export default {
  components: { RoundImg },
  data() {
    return {
      isThread: true,
      isRetweeted: false,
      isEmbeded: false,
    };
  },
};
</script>

<style>
</style>
