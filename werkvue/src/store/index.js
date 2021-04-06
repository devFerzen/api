/**
 * @file vuexStore file
 * Consumo de states, getters, actions y mutations de un objeto en común
 */

import Vue from 'vue';
import Vuex from 'vuex';

import decode from 'jwt-decode';
import router from '../router';

import Autenticacion from './Autenticacion';
import Models from './Models';


Vue.use(Vuex);
export default new Vuex.Store({
  strict: true,
  state: {
  },
  getters: {
  },
  actions: {

  },
  mutations: {
  },
  modules: {
    Autenticacion,
    Models
  }


});
