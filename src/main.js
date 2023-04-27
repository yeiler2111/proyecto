import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'//css bootstrap
import '@/assets/bootstrap.bundle.js'//js bootstrap

createApp(App).use(store).use(router).mount('#app')
