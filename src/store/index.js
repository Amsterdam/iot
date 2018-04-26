import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: null,
    markers: null
  },
  actions: {
    setLocations (store, locations) {
      store.commit('locations', locations)
    },
    setMarkers (store, markers) {
      store.commit('markers', markers)
    }
  },
  mutations: {
    locations (state, locations) {
      state.locations = locations
    },
    markers (state, markers) {
      state.markers = markers
    }
  },
  getters: {
    locations: state => {
      return state.locations
    },
    markers: state => {
      return state.markers
    }
  }
})
