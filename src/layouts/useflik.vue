<template>
  <header aria-label="Site Header" class="w-100 lg:w-[500px] md:w-[500px] mx-auto">
    <div class="mx-auto max-w-screen-xl px-5">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <button id="btn-logo" aria-label="btn-logo">
            <IconsFlikHorizon />
          </button>
        </div>

        <div class="flex items-center gap-4"></div>

        <div class="flex items-center gap-4">
          <div class="block">
            <button class="block transition">
              <i-mdi:cart class="inline" /> <span class="cart-total">Rp120.500</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section>
    <RouterView />
  </section>
</template>
<style scoped>
p {
  @apply p-3;
}
.cart-total {
  @apply text-gray-800 font-semibold text-sm;
}
</style>
