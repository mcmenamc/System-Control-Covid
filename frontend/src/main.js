import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core'
import Vuelidate from 'vuelidate'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax  from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax )
Vue.use(VueSweetalert2);
Vue.use(VueAnimXYZ)
Vue.use(Vuelidate);
Vue.use(VueAxios, axios)
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.baseURL = 'https://sistemacovid.herokuapp.com/api';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
