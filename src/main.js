// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

import '../static/app.scss'

import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'
import store from './store'
import { getMarkers, getLocations, initIoT } from './services/api/iot'

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
let vueApp = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  computed: {
    ...mapGetters([
      'text'
    ])
  },
  methods: {
    ...mapActions({
      setLocations: 'setLocations',
      setMarkers: 'setMarkers'
    }),
    async init () {
      initIoT()

      const markers = await getMarkers()
      this.setMarkers(markers)

      const locations = await getLocations()
      this.setLocations(locations)
    }
  }
})

vueApp.init()
