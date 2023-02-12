<script>
import { ref } from "vue"
import "vue3-tel-input/dist/vue3-tel-input.css"
import { VueTelInput } from "vue3-tel-input"

export default {
  components: {
    VueTelInput,
  },
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
  <form>
    <vue-tel-input
      v-model="phone"
      :mode="international"
      default-country="ID"
      :auto-default-country="false"
      :valid-characters-only="true"
      :disabled-fetching-country="true"
      placeholder="Enter a phone number"
      invalid-msg="Phone number invalid"
      :only-countries="['ID', 'SG', 'MY', 'PH', 'BN']"
      class="border-gray-400 rounded-lg text-sm"
    ></vue-tel-input>
  </form>
</template>

<style>
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
  font-size: 14.5px !important;
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
  @apply rounded-b-md;
  border: 1px solid #eee !important;
  font-size: 13px;
  left: 0.5px !important;
}
/* override vue-phone-number-input  */
</style>
