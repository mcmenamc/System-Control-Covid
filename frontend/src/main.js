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

Vue.use(VueSweetalert2);
Vue.use(VueAnimXYZ)
Vue.use(Vuelidate);
Vue.use(VueAxios, axios)
// axios.defaults.baseURL = 'http://localhost:3000/api'; // pars local  
axios.defaults.baseURL = 'https://sistema-control-covid.herokuapp.com/api'; // para heroku
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
