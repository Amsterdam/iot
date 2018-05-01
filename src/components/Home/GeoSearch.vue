<template>
  <div>
    <v-select v-model="selected" label="searchText" :options="options" @search="onSearch" placeholder="Zoek">
      <template slot="option" slot-scope="option">
        {{ option._display || '' }}
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { geoSearch, getBounds } from '../../services/api/geosearch'
import { fitBounds } from '../../services/iotmap'
import { mapHome } from '../../services/map'

export default {
  name: 'GeoSearch',
  data () {
    return {
      selected: null,
      options: []
    }
  },
  computed: {
    ...mapGetters([
      'map'
    ])
  },
  watch: {
    'selected' (newValue) {
      this.onSelect(newValue)
    }
  },
  methods: {
    onSelect: async function (selected) {
      if (selected) {
        selected.searchText = selected._display
        const [p1, p2] = await getBounds(selected)
        fitBounds(this.map, p1, p2)
      } else {
        this.options = []
        mapHome(this.map)
      }
    },
    onSearch: async function (searchText) {
      const results = await geoSearch(searchText)
      this.options = results
    }
  }
}
</script>

<style scoped>

</style>
