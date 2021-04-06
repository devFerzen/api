
const state = {
  mRActive: false,
  mISActive: false
};

const getters = {
  mRActive: state => state.mRActive,
  mISActive: state => state.mISActive
};

const actions = {
  mRActiveAction({commit}, isActive){
    commit('MODAL_R', {isActive: isActive});
  },
  mISActiveAction({commit}, params){
    commit('MODAL_IS', params);
  }
};

const mutations = {
  MODAL_R( state, payload ){
    state.mRActive = payload.isActive;
  },
  MODAL_IS( state, payload ){
    state.mISActive = payload.isActive;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
