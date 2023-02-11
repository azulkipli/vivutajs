<script setup>
import { useRouter } from "vue-router"
</script>
<template>
  <header>
    <TopNavigation />
  </header>
  <main
    class="mt-2 p-7 fix500w"
    :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`"
  >
    <RouterView />
  </main>
</template>
<style scoped>
.fix500 {
  @apply w-[500px] mx-auto;
}
</style>
