import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}
const getters = {
  clicks() {},
  inputValue() {}
}
const actions = {
  actionClick() {
  },
  actionInput() {
  },
}
const mutations = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
})
