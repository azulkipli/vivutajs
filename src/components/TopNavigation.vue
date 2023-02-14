<template>
  <nav class="mt-1 p-2 px-5 w-100 lg:w-[500px] md:w-[500px] mx-auto border">
    <RouterLink to="/" class="px-2 py-4 text-sm">Home</RouterLink>
    <RouterLink to="/about" class="px-2 py-4 text-sm">About</RouterLink>
    <RouterLink to="/sample" class="px-2 py-4 text-sm">Sample</RouterLink>
    <RouterLink to="/demo" class="px-2 py-4 text-sm">Demo</RouterLink>
  </nav>
</template>
<style scoped>
.router-link-exact-active {
  @apply underline;
}
</style>
