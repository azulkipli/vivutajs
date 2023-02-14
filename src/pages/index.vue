<script>
import { defineAsyncComponent } from "vue"
export default {
  components: {
    FormPhone: defineAsyncComponent(() => import("../lazycomponents/FormPhone.vue")),
  },
  setup() {},
  mounted() {
    console.log(`Page Flik is now mounted.`)
  },
}
</script>

<template>
  <section class="flikpage">
    <div class="page-header">
      <h2 class="step-title">Login or Sign Up</h2>
      <span class="text-gray-500 text-sm">Enter your phone number</span>
    </div>
    <div class="max-w-screen-xl mx-auto">
      <FormPhone />
    </div>
  </section>
</template>

<route lang="yaml">
meta:
  layout: useflik
</route>

<style>
.flikpage {
  @apply lg:w-[500px] md:w-[500px] py-2 px-5 mx-auto h-screen border-gray-100;
}
.page-header {
  @apply text-center text-sm w-5/6 mx-auto mb-5;
}
.step-title {
  line-height: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  text-align: center;
}
</style>
