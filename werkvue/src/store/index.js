import Vue from 'vue';
import Vuex from 'vuex';
import decode from 'jwt-decode';
import router from '../router';
import Autenticacion from './Autenticacion';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    Autenticacion
  }


});
