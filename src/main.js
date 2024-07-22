import './assets/main.css'
import 'vue3-toastify/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'

import CompForms from './components/CompForms.vue';

const app = createApp(App);
app.component('CompForms', CompForms);
app.mount('#app');



createApp(App).mount('#app')
