import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      name: '',
      email: '',
      role: '',
      token: '',
      avatar: '',
      created_at: '',
      deleted_at: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
