import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router)

window._BASE_CONFIG = {
  title: '知乎',
  baseUrl: 'http://localhost:3000',
  projectKey: 'default'
}

app.config.globalProperties.$__BASE_URL = window._BASE_CONFIG.baseUrl

app.mount('#app')
