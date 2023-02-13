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
  <section class="w-100 lg:w-[500px] md:w-[500px] p-5 mx-auto h-screen">
    <div class="py-2 mb-5">
      <h2 class="text-center text-fs-15">Login</h2>
    </div>
    <div class="max-w-screen-xl px-2 mx-auto">
      <FormPhone />
    </div>
  </section>
</template>
<route lang="yaml">
meta:
  layout: useflik
</route>
