<!--Example of a component that uses Leaflet-->
<template>
  <div>
    <div class="row">
      <div class="col-12 mt-1">
        <div :ref="mapRef" class="map" :style="{'height': height + 'px'}">

          <div class="leaflet-bottom leaflet-left">
            <div id="legend" class="map-overlay">
              <h3 class="font-weight-bold">Apparaten</h3>
              <div v-for="markerType in markerTypes" :key="markerType.name"
                   class="mb-1" @click="toggleMarkers(markerType.id)">
                <button class="btn btn-sm btn-light">
                  <img :src="markerType.iconUrl" :class="{'marker-off': !markerType.enabled}">
                </button>
                {{markerType.name}}
              </div>
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
import { mapGetters, mapActions } from 'vuex'
import ThingInfo from './Thing'
import { amsMap } from '@/services/map.js'
import { showLocations, getMarkerTypes, toggleMarkers, onMap, cancelHighlight } from '@/services/iotmap'
import { getThing, getLocation } from '@/services/api/iot'

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
    ...mapActions({
      setMap: 'setMap'
    }),
    showLocationMarkers (markers) {
      if (markers) {
        showLocations(this.map, markers, this.showThing)
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
      cancelHighlight(this.map)
    }
  },
  watch: {
    'markers' () {
      this.showLocationMarkers(this.markers)
    }
  },
  data () {
    return {
      map: null,
      mapRef: `${this._uid}.leafletExample`,
      height: window.innerHeight - 120,
      thing: null,
      location: null,
      markerTypes: null
    }
  },
  mounted () {
    window.addEventListener('resize', () => { this.height = window.innerHeight - 120 })

    this.map = amsMap(this.$refs[this.mapRef])
    this.setMap(this.map)

    this.markerTypes = getMarkerTypes()
    this.showLocationMarkers(this.markers)

    onMap(this.map, 'legend', 'bottomleft')
    onMap(this.map, 'thing', 'bottomright')
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
.marker-off {
  opacity: 0.1;
}
</style>
