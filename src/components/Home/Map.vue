<!--Example of a component that uses Leaflet-->
<template>
  <div>
    <div class="row">
      <div class="col-9 mt-1">
        <div :ref="mapRef" class="map"></div>
      </div>
      <div class="col-3">
        <h3>Apparaten</h3>
        <form class="">
          <div v-for="markerType in markerTypes" :key="markerType.name"
               class="form-check">
            <input type="checkbox"
                   class="form-check-input"
                   :id="`toggle${markerType.name}`"
                   v-model="markerType.enabled"
                   @click="toggleMarkers(markerType.id)"
            >
            <label class="form-check-label" :for="`toggle${markerType.name}`">
              <img :src="markerType.iconUrl"> {{markerType.name}}
            </label>
          </div>
        </form>
        <div class="mt-3">
          <thing-info :thing="thing" :location="location"></thing-info>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThingInfo from './Thing'
import { amsMap } from '@/services/map.js'
import { showLocations, getMarkerTypes, toggleMarkers } from '@/services/iotmap'
import { getThing, getLocation } from '@/services/api/iot'

let map = null
// let locationsMarkers = null

export default {
  name: 'Map',
  components: {
    ThingInfo
  },
  computed: {
    ...mapGetters([
      'locations',
      'markers'
    ])
  },
  methods: {
    showLocationMarkers (markers) {
      if (markers) {
        showLocations(map, markers, this.showThing)
      }
    },

    toggleMarkers,

    async showThing (marker) {
      const thing = await getThing(marker.id)
      const location = await getLocation(marker.location_id)
      this.thing = thing
      this.location = location
    }
  },
  watch: {
    'markers' () {
      this.showLocationMarkers(this.markers)
    }
  },
  data () {
    return {
      mapRef: `${this._uid}.leafletExample`,
      thing: null,
      location: null,
      markerTypes: null
    }
  },
  mounted () {
    this.markerTypes = getMarkerTypes()
    map = amsMap(this.$refs[this.mapRef])
    this.showLocationMarkers(this.markers)
  }
}
</script>

<style scoped>
.map {
  height: 800px
}
</style>
