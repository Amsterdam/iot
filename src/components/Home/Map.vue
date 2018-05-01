<!--Example of a component that uses Leaflet-->
<template>
  <div>
    <div class="row">
      <div class="col-12 mt-1">
        <div :ref="mapRef" class="map" :style="{'height': height + 'px'}">

          <div class="leaflet-bottom leaflet-left">
            <div id="legend" class="map-overlay">
              <h3 class="font-weight-bold">Apparaten</h3>
              <form>
                <div v-for="markerType in markerTypes" :key="markerType.name"
                     class="form-check mb-1" @click="toggleMarkers(markerType.id)">
                  <input type="checkbox"
                         class="form-check-input"
                         :id="`toggle${markerType.name}`"
                         v-model="markerType.enabled"
                  >
                  <label class="form-check-label" :for="`toggle${markerType.name}`">
                    <img :src="markerType.iconUrl"> {{markerType.name}}
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div class="leaflet-bottom leaflet-right">
            <div id="thing" class="map-overlay" v-show="thing">
              <div v-if=thing>
                <button type="button" class="btn btn-sm close float-right" title="Sluit" @click="closeThing">&times;</button>
                <thing-info :thing="thing" :location="location"></thing-info>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ThingInfo from './Thing'
import { amsMap } from '@/services/map.js'
import { showLocations, getMarkerTypes, toggleMarkers, onMap, cancelHighlight } from '@/services/iotmap'
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
      if (marker) {
        const thing = await getThing(marker.id)
        const location = await getLocation(marker.location_id)
        this.thing = thing
        this.location = location
      } else {
        this.thing = null
        this.location = null
      }
    },

    closeThing () {
      this.showThing(null)
      cancelHighlight(map)
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
      height: window.innerHeight - 120,
      thing: null,
      location: null,
      markerTypes: null
    }
  },
  mounted () {
    window.addEventListener('resize', () => { this.height = window.innerHeight - 120 })

    map = amsMap(this.$refs[this.mapRef])

    this.markerTypes = getMarkerTypes()
    this.showLocationMarkers(this.markers)

    onMap(map, 'legend', 'bottomleft')
    onMap(map, 'thing', 'bottomright')
  }
}
</script>

<style scoped>
.map {
}
.map-overlay {
  background-color: white;
  margin: 15px;
  padding: 15px;
}
</style>
