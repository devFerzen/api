import { apolloClient } from '../../vue-apollo';
import decode from 'jwt-decode'

const state = {
  user:{},
};
const getters = {
  user: state => state.user,
};

const actions = {
    actUserStore({ commit }, nuevoUsuarioInfo){
      commit('INICIANDO_SESION', {input: nuevoUsuarioInfo});
    }

};

const mutations = {
  INICIANDO_SESION(state, payload) {
    state.user = payload.input;
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
