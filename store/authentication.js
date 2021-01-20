export const state = () => ({
  authenticatedUser: null,
  isAuthenticated: false
});

export const getters =  {
  isAuthenticated: (state) => {
    return state.isAuthenticated
  }
}

export const mutations = {
  setAuthenticatedUser(state, user) {
    state.authenticatedUser = user;
  },
  setIsAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  }
};
