import {IonicVue} from '@ionic/vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@ionic/vue/css/core.css'


import './assets/base.css'


const app = createApp(App)

app.use(router,IonicVue)

app.mount('#app')
