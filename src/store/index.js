import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: null
  },
  actions: {
    setLocations (store, locations) {
      store.commit('locations', locations)
    }
  },
  mutations: {
    locations (state, locations) {
      state.locations = locations
    }
  },
  getters: {
    locations: state => {
      return state.locations
    }
  }
})
