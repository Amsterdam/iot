<template>
  <div v-if="thing">
    <info-request-form :thing="thing"></info-request-form>
  </div>
</template>

<script>
import { getThing } from '../../services/api/iot'
import InfoRequestForm from './InfoRequestForm'

export default {
  name: 'InfoRequest',
  components: {
    InfoRequestForm
  },
  data () {
    return {
      thing: null
    }
  },
  async mounted () {
    const id = this.$route.params.id
    this.thing = await getThing(id)
  }
}
</script>

<style scoped>
</style>
