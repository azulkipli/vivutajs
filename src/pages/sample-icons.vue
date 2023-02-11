<script>
import { /* RouterLink, */ RouterView } from "vue-router"

export default {
    defineComponent: {
        RouterView,
    },
    setup() { },
    mounted() {
        console.log(`Page Sample Icons is now mounted.`)
    },
}
</script>
<template>
    <section class="container">
        <h1>Sample Icons</h1>
        <i-carbon-accessibility />
        <i-mdi-account-box style="font-size: 2em; color: red" />
    </section>
</template>
<route lang="yaml">
meta:
  layout: fluid
  bgColor: "#e1e1e1"
</route>
