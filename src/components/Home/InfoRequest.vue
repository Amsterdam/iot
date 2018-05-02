<template>
  <div v-if="thing">
    <info-request-form :thing="thing" :location="location"></info-request-form>
  </div>
</template>

<script>
import { getThing, getLocation } from '../../services/api/iot'
import InfoRequestForm from './InfoRequestForm'

export default {
  name: 'InfoRequest',
  components: {
    InfoRequestForm
  },
  data () {
    return {
      thing: null,
      location: null
    }
  },
  async mounted () {
    const thingId = this.$route.params.thingId
    const locationId = this.$route.params.locationId
    this.thing = await getThing(thingId)
    this.location = await getLocation(locationId)
  }
}
</script>

<style scoped>
</style>
