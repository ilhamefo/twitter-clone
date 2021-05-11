export const state = () => ({
  users: [],
  isLoaded: false,
  showModalUser: false,
  userSelected: false,
});

export const actions = {
  getUsers({ commit }) {
    this.$axios
      .get('http://localhost:3004/users')
      .then((response) => {
        commit('users', response.data);
        commit('isLoaded', true)
      })
      .catch((err) => console.log(err));
  },

};

export const mutations = {
  users(state, payload) {
    state.users = payload;
  },
  isLoaded(state, payload) {
    state.isLoaded = payload;
  },
  userSelected(state, payload) {
    state.userSelected = payload;
  },
  showModalUser(state) {
    state.showModalUser = !state.showModalUser;
  },
};

export const getters = {
  userActive: state => {
    return state.users.filter((item) => item.active == true)[0];
  }
}
