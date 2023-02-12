<script>
// import "intl-tel-input/build/css/intlTelInput.css"
// import "intl-tel-input/build/js/intlTelInput.js"
// import intlTelInput from "intl-tel-input"

import { ref } from "vue"
import { VueTelInput } from "vue3-tel-input"
import "vue3-tel-input/dist/vue3-tel-input.css"

export default {
  components: {
    VueTelInput,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const phone = ref(null)
  },
  mounted() {
    console.log(`Page Index is now mounted.`)
    // const input = document.querySelector("#telephone")
    // intlTelInput(input, {
    //   preferredCountries: ["id", "my", "sg"],
    // })
  },
}
</script>
<template>
  <section class="w-100 lg:w-[500px] md:w-[500px] p-5 mx-auto h-screen">
    <div class="py-2 mb-5">
      <h2 class="text-center text-fs-15">Login</h2>
    </div>
    <div class="max-w-screen-xl px-2 mx-auto">
      <form class="w-100">
        <!-- <input id="telephone" type="tel" class="form-control mx-auto" /> -->
        <vue-tel-input v-model="phone" mode="international"></vue-tel-input>
      </form>
    </div>
  </section>
</template>
<route lang="yaml">
meta:
  layout: useflik
</route>
<style>
p {
  @apply p-3;
}
.cart-total {
  @apply text-gray-800 font-semibold text-sm;
}
</style>
