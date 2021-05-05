export const state = () => ({
  data: {
    showModalUnfollow: false,
    recommendation: null,
    selected: null,
    tweet: "",
  },
})
export const actions = {
  fireUnfollow({ commit, state, dispatch }, user) {
    this.$axios
      .$patch(`http://localhost:3004/recommendation/${user.id}`, {
        isFollowing: false,
      })

    dispatch('getRecommendation');
    commit('showModalUnfollow', false);
    commit('selected', null);
  },

  fireFollow({ commit, state, dispatch }, user) {
    this.$axios
      .$patch(`http://localhost:3004/recommendation/${user.id}`, {
        isFollowing: true,
      })
      .then(() => {
        dispatch('getRecommendation');
      });
  },
  getRecommendation({ commit, state },) {
    this.$axios
      .$get(`http://localhost:3004/recommendation/`)
      .then((response) => {
        commit('refreshRecommendation', response)
      });
  },
}
export const mutations = {
  increment(state) {
    state.counter++
  },
  showModalUnfollow(state, toggle) {
    state.data.showModalUnfollow = toggle
  },
  selected(state, user) {
    state.data.selected = user
  },
  refreshRecommendation(state, response) {
    state.data.recommendation = response
  },
  tweet(state, data) {
    state.data.tweet = data
  },
}
