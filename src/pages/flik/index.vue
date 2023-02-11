<script>
export default {
  setup() {},
  mounted() {
    console.log(`Page Navigation is now mounted.`)
  },
}
</script>
<template>
  <section class="w-100 lg:w-[500px] md:w-[500px] p-5 mx-auto h-screen">
    <div class="border rounded-xl py-3 my-3">
      <h2 class="text-center text-fs-15">Hello, <span class="font-semibold">Shopper</span></h2>
    </div>
    <div class="max-w-screen-xl px-2 mx-auto">
      <div class="max-w-3xl mx-auto">
        <div class="text-left">
          <h1 class="text-xl font-bold text-gray-700">Cart</h1>
        </div>

        <div class="mt-8">
          <ul class="space-y-4">
            <li class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                class="object-cover w-16 h-16 rounded"
              />

              <div class="ml-4">
                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Size:</dt>
                    <dd class="inline">XXS</dd>
                  </div>

                  <div>
                    <dt class="inline">Color:</dt>
                    <dd class="inline">White</dd>
                  </div>
                </dl>
              </div>

              <div class="flex items-center justify-end flex-1 gap-2">
                <form>
                  <label for="Line1Qty" class="sr-only"> Quantity </label>

                  <input
                    id="Line1Qty"
                    type="number"
                    min="1"
                    value="1"
                    class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </form>

                <button class="text-gray-600 transition hover:text-red-600">
                  <span class="sr-only">Remove item</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>

            <li class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                class="object-cover w-16 h-16 rounded"
              />

              <div class="ml-4">
                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Size:</dt>
                    <dd class="inline">XXS</dd>
                  </div>

                  <div>
                    <dt class="inline">Color:</dt>
                    <dd class="inline">White</dd>
                  </div>
                </dl>
              </div>

              <div class="flex items-center justify-end flex-1 gap-2">
                <form>
                  <label for="Line2Qty" class="sr-only"> Quantity </label>

                  <input
                    id="Line2Qty"
                    type="number"
                    min="1"
                    value="1"
                    class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </form>

                <button class="text-gray-600 transition hover:text-red-600">
                  <span class="sr-only">Remove item</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>

            <li class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                alt=""
                class="object-cover w-16 h-16 rounded"
              />

              <div class="ml-4">
                <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

                <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt class="inline">Size:</dt>
                    <dd class="inline">XXS</dd>
                  </div>

                  <div>
                    <dt class="inline">Color:</dt>
                    <dd class="inline">White</dd>
                  </div>
                </dl>
              </div>

              <div class="flex items-center justify-end flex-1 gap-2">
                <form>
                  <label for="Line3Qty" class="sr-only"> Quantity </label>

                  <input
                    id="Line3Qty"
                    type="number"
                    min="1"
                    value="1"
                    class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </form>

                <button class="text-gray-600 transition hover:text-red-600">
                  <span class="sr-only">Remove item</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>

          <div class="flex justify-end pt-8 mt-8 border-t border-gray-100">
            <div class="w-screen max-w-lg space-y-4">
              <dl class="space-y-0.5 text-sm text-gray-700">
                <div class="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>Rp131000</dd>
                </div>

                <div class="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-Rp10500</dd>
                </div>

                <div class="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>Rp120.500</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<route lang="yaml">
meta:
  layout: flik
</route>
<style>
p {
  @apply p-3;
}
.cart-total {
  @apply text-gray-800 font-semibold text-sm;
}
</style>
