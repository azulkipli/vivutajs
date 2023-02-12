<script>
import { ref } from "vue"
export default {
  setup() {
    const phone = ref(null)

    return {
      phone,
    }
  },
  mounted() {
    console.log(`Page Flik is now mounted.`)
  },
}
</script>
<template>
  <section class="w-100 lg:w-[500px] md:w-[500px] p-5 mx-auto h-screen">
    <div class="py-2 mb-5">
      <h2 class="text-center text-fs-15">Login</h2>
    </div>
    <div class="max-w-screen-xl px-2 mx-auto">
      <form>
        <vue-tel-input
          v-model="phone"
          mode="international"
          class="border-gray-400 rounded-lg"
        ></vue-tel-input>
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
/* override vue-phone-number-input  */
.country-selector__label {
  display: none !important;
}

.country-selector__input,
.input-tel__input {
  background-color: #efefef !important;
  color: #333 !important;
  border: none !important;
}

.country-selector__country-flag {
  top: 15px !important;
}

.country-selector__input {
  padding-top: 12px !important;
  min-height: 45px !important;
}

.input-tel__input {
  padding: 12px !important;
  height: auto !important;
}

.input-tel__label {
  display: none !important;
}
.input-tel__clear {
  top: 5px !important;
}

.vti__input {
  background-color: #efefef !important;
  color: #333 !important;
  border: none !important;
  border-width: 0 !important;
  border-radius: 0 6px 6px 0 !important;
  outline: none !important;
  padding: 10px !important;
  --tw-ring-shadow: 0 0 #000 !important;
  --tw-ring-color: white !important;
}
.vue-tel-input:focus,
.vue-tel-input:focus-within,
.vti__input:focus-within,
.vti__input:focus {
  box-shadow: none !important;
  --tw-ring-shadow: 0 0 white !important;
  --tw-ring-color: white !important;
  --tw-ring-offset-shadow: white !important;
}
.vti__dropdown {
  background-color: #efefef !important;
  border-radius: 6px 0 0 6px !important;
}
.vue-tel-input {
  border: none !important;
  border-width: 0 !important;
}
.vti__input.vti__search_box {
  border-radius: 0 !important;
  width: 100% !important;
  margin: 0 !important;
}
.vti__dropdown-list {
  border: solid 1px #e5e5e5;
  font-size: 13px;
  left: 1px;
}
/* override vue-phone-number-input  */
</style>
