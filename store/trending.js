export const state = () => ({
  trendings: null,
  isLoaded: false
})

export const mutations = {
  trendings(state, payload) {
    state.trendings = payload
  },
  isLoaded(state, payload) {
    state.isLoaded = payload
  },
}

export const actions = {
  getTrendings({ commit }) {
    this.$axios.$get('http://localhost:3004/trendings').then(
      (response) => {
        commit('trendings', response)
        commit('isLoaded', true)
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }
}

export const getters = {}
