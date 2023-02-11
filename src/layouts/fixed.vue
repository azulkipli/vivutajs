<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <TopNavigation />
  </header>
  <section
    class="mt-2 p-7 fix500w"
    :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`"
  >
    <RouterView />
  </section>
</template>
<style scoped>
.fix500 {
  @apply w-[500px] mx-auto;
}
</style>
