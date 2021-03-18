import Vue from 'vue';
import Vuex from 'vuex';
import decode from 'jwt-decode';
import router from '../router';
import Autenticacion from './Autenticacion';

/*AFSS - el patron para organizar a los stores
es organizandoles con su tipo de dato quizás tendremos
ajustes - inbox - etc...

AFSS - la información que ocupa ser guardada aquí, esa acción
la pondremos en el objeto actions
*/
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
