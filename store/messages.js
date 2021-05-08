export const state = () => ({
  messages: [],
  show: false,
});
export const mutations = {
  messages(state, payload) {
    state.messages = payload;
  },
  show(state, payload) {
    state.show = payload;
  },

};


export const actions = {
  getMessages({ commit }) {
    this.$axios.get('http://localhost:3004/messages').then((response) => {
      commit('messages', response.data);
    });
  },
  toggle({ commit, state }) {
    commit('show', !state.show);
  }
};
