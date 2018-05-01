import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: null,
    locations: null,
    markers: null
  },
  actions: {
    setMap (store, map) {
      store.commit('map', map)
    },
    setLocations (store, locations) {
      store.commit('locations', locations)
    },
    setMarkers (store, markers) {
      store.commit('markers', markers)
    }
  },
  mutations: {
    map (state, map) {
      state.map = map
    },
    locations (state, locations) {
      state.locations = locations
    },
    markers (state, markers) {
      state.markers = markers
    }
  },
  getters: {
    map: state => {
      return state.map
    },
    locations: state => {
      return state.locations
    },
    markers: state => {
      return state.markers
    }
  }
})
