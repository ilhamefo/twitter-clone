export const state = () => ({
  topics: [],
})

export const actions = {
  getTopics({ commit }) {
    this.$axios.$get('http://localhost:3004/topics').then(
      (response) => {
        commit('topics', response)
      }
    ).catch(
      err => console.log(err)
    )
  }
}

export const mutations = {
  topics(state, payload) {
    state.topics = payload
  }
}
