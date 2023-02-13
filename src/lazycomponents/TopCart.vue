<script>
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    console.log(`TopCart mounted.`)
  },
  methods: {
    goToCart() {
      console.warn("GoToCart")
    },
  },
})
</script>
<template>
  <button class="block transition" @click="goToCart">
    <i-mdi:cart class="inline" /> <span class="cart-total">{{ `Rp${total}` }}</span>
  </button>
</template>
<style scoped>
.cart-total {
  @apply text-gray-800 font-medium text-sm;
}
</style>
