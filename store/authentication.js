export const state = () => ({
  authenticatedUser: null,
  isAuthenticated: false
});

export const mutations = {
  setAuthenticatedUser(state, user) {
    state.authenticatedUser = user;
  },
  setIsAuthenticated(state) {
    state.isAuthenticated = true
  }
};
