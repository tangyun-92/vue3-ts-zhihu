import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import SvgIcon from '@/icons/index.ts'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import 'normalize.css/normalize.css'
import '@/styles/base.scss'

const app = createApp(App)
app.use(SvgIcon)
app.use(ElementPlus)
app.use(store).use(router)

window._BASE_CONFIG = {
  title: '知乎',
  baseUrl: 'http://localhost:3000',
  projectKey: 'default'
}

// app.config.globalProperties.$__BASE_URL = window._BASE_CONFIG.baseUrl

app.mount('#app')
