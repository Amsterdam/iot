<!--Example of a component that uses Leaflet-->
<template>
  <div>
    <div class="row">
      <div class="col-9">
        <div :ref="mapRef" class="map"></div>
      </div>
      <div class="col-3">
        <thing-info :thing="thing" :location="location"></thing-info>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThingInfo from './Thing'
import { amsMap } from '@/services/map.js'
import { showLocations } from '@/services/iotmap'
import { getThing } from '@/services/api/iot'

let map = null
// let locationsMarkers = null

export default {
  name: 'Map',
  components: {
    ThingInfo
  },
  computed: {
    ...mapGetters([
      'locations'
    ])
  },
  methods: {
    showLocationMarkers (locations) {
      if (locations) {
        showLocations(map, locations, this.showThing)
      }
    },
    async showThing (location) {
      const thing = await getThing(location.thing_id)
      console.log('Thing', thing, location)
      this.thing = thing
      this.location = location
    }
  },
  watch: {
    'locations' () {
      this.showLocationMarkers(this.locations)
    }
  },
  data () {
    return {
      mapRef: `${this._uid}.leafletExample`,
      thing: null,
      location: null
    }
  },
  mounted () {
    map = amsMap(this.$refs[this.mapRef])
    this.showLocationMarkers(this.locations)
  }
}
</script>

<style scoped>
.map {
  height: 800px
}
</style>
