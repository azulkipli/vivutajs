import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import { createHead, useHead } from "unhead"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "virtual:generated-pages"
import VueTelInput from "vue3-tel-input"
import "vue3-tel-input/dist/vue3-tel-input.css"

const routes = setupLayouts(generatedRoutes)

console.log("VITE_APP_TITLE : ", import.meta.env.VITE_APP_TITLE)

import App from "./App.vue"
// import routes from "~pages"

import "./assets/tailwind.css"
const head = createHead()
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

useHead({
  title: "ViVuTaJS",
  meta: [
    {
      name: "description",
      content: "Vite VueJS TailwindCSS JavaScript starter template",
      keywords: "vite, vue, tailwind, starter, template",
    },
  ],
})

const VueTelInputOptions = {
  mode: "international",
  defaultCountry: "ID",
  autoDefaultCountry: false,
  validCharactersOnly: true,
  disabledFetchingCountry: true,
  dropdownOptions: {
    showSearchBox: true,
    showFlags: true,
    width: "300px",
  },
  inputOptions: {
    autofocus: true,
    showDialCode: false,
    required: true,
    maxlength: 18,
    "aria-describedby": "phone",
    placeholder: "Enter a phone number",
    invalidMsg: "Phone number invalid",
  },
  onlyCountries: ["ID", "MY", "SG", "PH", "BN"],
}

app.use(VueTelInput, VueTelInputOptions)

app.use(createPinia())
app.use(router)
app.use(head)
app.mount("#app")
