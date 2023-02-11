<script>
import { /* RouterLink, */ RouterView } from "vue-router"

export default {
  defineComponent: {
    RouterView,
  },
  setup() { },
  mounted() {
    console.log(`Page About is now mounted.`)
    console.info("This is INFO example")
    console.warn("This is WARNING example")
    console.error("This is ERROR example")
  },
}
</script>
<template>
  <section class="container">
    <h1>About Page</h1>
  </section>
</template>
<route lang="yaml">
meta:
  layout: fixed
  bgColor: "#a5a5a5"
</route>
