import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'
import 'flyonui/dist/accordion'
import 'flyonui/flyonui'
import router from './Router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')