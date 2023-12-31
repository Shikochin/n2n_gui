import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Pinia
const pinia = createPinia()


createApp(App).use(vuetify).use(pinia).mount('#app')

console.log("n2n_gui 😎")