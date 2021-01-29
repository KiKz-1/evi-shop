export const state = () => ({
  authenticatedUser: null,
  isAuthenticated: false
});

export const getters =  {
  isAuthenticated: state => {
    return state.isAuthenticated
  },
  userId: state => {
    return state.authenticatedUser?.id
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
