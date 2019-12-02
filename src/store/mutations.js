export default {
  setUserName({ state }, username) {
    state.global.username = username;
  },
  setEnumSelectData(state, data) {
    state.enumSelectData = data;
  },
  setAddressData(state, data) {
    state.addressData = data;
  },
  setRepayAdvanceData(state, data) {
    state.repayAdvanceData = data;
  },
  addRouteHistory(state, routeName) {
    if (state.historyRouteNames[state.historyRouteNames.length - 1] !== routeName) {
      state.historyRouteNames.push(routeName);
    }
  },
  removeLastRouteHistory(state) {
    state.historyRouteNames.splice(-1, 1);
  }
};
