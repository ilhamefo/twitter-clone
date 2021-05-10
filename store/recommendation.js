export const state = () => ({
  recommendation: null,
  showModalUnfollow: false,
  selected: null,
})

export const actions = {
  fireUnfollow({ commit, dispatch }, user) {
    this.$axios.$patch(`http://localhost:3004/recommendation/${user.id}`, {
      isFollowing: false
    }).then((response) => {
      dispatch('getRecommendation');
      commit('showModalUnfollow', false);
      commit('selected', null);
    });
  },

  fireFollow({ dispatch }, user) {
    this.$axios
      .$patch(`http://localhost:3004/recommendation/${user.id}`, {
        isFollowing: true
      })
      .then(() => {
        dispatch('getRecommendation');
      });
  },
  getRecommendation({ commit }) {
    this.$axios.$get(`http://localhost:3004/recommendation/`).then((response) => {
      commit('refreshRecommendation', response);
    });
  },
}

export const mutations = {
  showModalUnfollow(state, toggle) {
    state.showModalUnfollow = toggle;
  },
  selected(state, user) {
    state.selected = user;
  },
  refreshRecommendation(state, response) {
    state.recommendation = response;
  },
}
