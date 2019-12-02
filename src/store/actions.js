export default {
  setUserName({ commit }, username) {
    commit('setUserName', username);
  },
  setEnumSelectData({ commit }, data) {
    commit('setEnumSelectData', data);
  },
  setAddressData({ commit }, data) {
    commit('setAddressData', data);
  },
  setRepayAdvanceData({ commit }, data) {
    commit('setRepayAdvanceData', data);
  },
  addRouteHistory({ commit }, routeName) {
    commit('addRouteHistory', routeName);
  },
  removeLastRouteHistory({ commit }) {
    commit('removeLastRouteHistory');
  }
};
