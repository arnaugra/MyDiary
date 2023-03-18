import { createApp } from 'vue'

import 'remixicon/fonts/remixicon.css'
import './style.css'
import './db'

import App from './App.vue'
import { i18n } from './plugins/i18n'

createApp(App).use(i18n).mount('#app')
