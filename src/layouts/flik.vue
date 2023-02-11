<template>
  <header aria-label="Site Header" class="w-100 lg:w-[500px] md:w-[500px] mx-auto">
    <div class="mx-auto max-w-screen-xl px-5">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <button>
            <IconsFlikHorizon />
          </button>
        </div>

        <div class="flex items-center gap-4">center</div>

        <div class="flex items-center gap-4">
          <!--             
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Login
            </a>

            <div class="hidden sm:flex">
              <a
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                href="/"
              >
                Register
              </a>
            </div>
          </div>
            -->
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
