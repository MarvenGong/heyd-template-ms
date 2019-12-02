export default {
  state: {
    pageTitle: '首页',
    creditStatus: null
  },
  mutations: {
    updateCreditStatus(state, creditInfo) {
      state.creditStatus = creditInfo;
    },
    removeCreditStatus(state) {
      state.creditStatus = null;
    }
  },
  actions: {
    updateCreditStatus({ commit }, creditInfo) {
      commit('updateCreditStatus', creditInfo);
    },
    removeCreditStatus({ commit }) {
      commit('removeCreditStatus');
    }
  },
  getters: {
    wqdPageTitle(state) {
      return state.pageTitle;
    }
  }
};
