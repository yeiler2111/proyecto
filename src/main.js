import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/bootstrap.min.css'//css bootstrap
import '@/assets/bootstrap.bundle.js'//js bootstrap
//sweetalert2 
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue from 'vue';
//bootstrap-vue


createApp(App).use(store).use(router).use(VueSweetalert2).use(Vue).mount('#app')
