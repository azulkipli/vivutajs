<script>
import { defineAsyncComponent } from "vue"
export default {
  components: {
    IconFlikHorizontal: defineAsyncComponent(() =>
      import("../lazycomponents/IconFlikHorizontal.vue")
    ),
    TopCart: defineAsyncComponent(() => import("../lazycomponents/TopCart.vue")),
  },
  setup() {},
  mounted() {
    console.log(`Layout Flik is now mounted.`)
  },
}
</script>
<template>
  <header aria-label="Site Header" class="w-100 lg:w-[500px] md:w-[500px] mx-auto">
    <div class="mx-auto max-w-screen-xl px-5">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <button id="btn-logo" aria-label="btn-logo">
            <IconFlikHorizontal />
          </button>
        </div>

        <div class="flex items-center gap-4"></div>

        <div class="flex items-end gap-4">
          <TopCart />
        </div>
      </div>
    </div>
  </header>
  <section>
    <RouterView />
  </section>
</template>
