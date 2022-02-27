import Vue from 'vue'
import Vuex from 'vuex'
import VueJwtDecode from 'vue-jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    auth: null,
    user: null,
  },
  mutations: {
    doLogin(state, token) {
      try{
        state.auth = true;
        state.token = token;
        state.user = VueJwtDecode.decode(state.token);
        if(state.user == null) {
          state.auth = false;
        }
      }
      catch(e){
        state.auth = false;
        state.token = null;
        state.user = null;
        localStorage.removeItem('token');
      }
    },
    doLogout(state) {
      state.auth = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    }
  },
  actions: {
    doLogin({ commit }, token) {
      commit("doLogin", token);
    },
    doLogout({ commit }) {
      commit("doLogout");
    }
  },
  modules: {
  }
})
