<script>
import { /* RouterLink, */ RouterView } from "vue-router"

export default {
  defineComponent: {
    RouterView,
  },
  setup() {},
  mounted() {
    console.log(`the APP is now mounted.`)
  },
}
</script>

<template>
  <main>
    <RouterView class="mt-5 p-5 w-[500px] mx-auto border" />
  </main>
</template>
<style>
.router-link-exact-active {
  @apply underline;
}
</style>
