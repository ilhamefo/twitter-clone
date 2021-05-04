export const state = () => ({
  data: {
    showModalUnfollow: false
  },
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  showModalUnfollow(state, toggle) {
    state.data.showModalUnfollow = toggle
  }
}
