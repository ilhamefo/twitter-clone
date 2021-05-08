export const state = () => ({
  savePrompt: false,
  showModal: false,
  tweet: '',

})

export const mutations = {
  showModal(state, payload) {
    state.showModal = payload
  },
  savePrompt(state, payload) {
    state.savePrompt = payload;
  },
  tweet(state, data) {
    state.tweet = data;
  }
}
