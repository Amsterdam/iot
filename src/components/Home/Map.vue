<!--Example of a component that uses Leaflet-->
<template>
  <div>
    <h2>Amsterdam</h2>
    <div :ref="mapRef" class="map"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { amsMap } from '@/services/map.js'
import { showLocations } from '../../services/iotmap'

let map = null
// let locationsMarkers = null

function showLocationMarkers (locations) {
  if (locations) {
    showLocations(map, locations)
  }
}

export default {
  name: 'Map',
  computed: {
    ...mapGetters([
      'locations'
    ])
  },
  watch: {
    'locations' () {
      showLocationMarkers(this.locations)
    }
  },
  data () {
    return {
      mapRef: `${this._uid}.leafletExample`
    }
  },
  mounted () {
    map = amsMap(this.$refs[this.mapRef])
    showLocationMarkers(this.locations)
  }
}
</script>

<style scoped>
.map {
  height: 800px
}
</style>
