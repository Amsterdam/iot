<template>
  <div>
    <h3 class="font-weight-bold">Details</h3>

    <h5>Apparaat</h5>

    <div class="font-weight-bold">Type</div>
    <p>{{thing.device_type}}</p>

    <div class="font-weight-bold">Naam</div>
    <p>{{thing.name}}</p>

    <div class="font-weight-bold">Beschrijving</div>
    <p>{{thing.description}}</p>

    <div class="font-weight-bold">Doel</div>
    <p>{{thing.purpose}}</p>

    <div class="font-weight-bold">Referentie</div>
    <p>{{thing.ref}}</p>

    <p class="font-weight-bold">
      <!--<router-link :to="{name: 'InfoRequest', params: { id: thing.id }}">-->
        <!--Contact eigenaar-->
      <!--</router-link>-->
      <button class="btn btn-primary" @click="contactOwner()">Contact eigenaar</button>
    </p>

    <h5>Plaatsing</h5>

    <div class="font-weight-bold">Plaats</div>
    <p>{{location.name}}</p>

    <div class="font-weight-bold">Referentie</div>
    <p>{{location.ref}}</p>

    <info-request-modal :thing="thing" ref="inforequest"></info-request-modal>
  </div>
</template>

<script>
import Card from '@/components/Layout/Card'
import InfoRequestModal from './InfoRequestModal'

export default {
  name: 'Thing',
  components: {
    InfoRequestModal,
    Card
  },
  data () {
    return {
    }
  },
  methods: {
    contactOwner () {
      this.$refs.inforequest.startRequest()
    }
  },
  props: [
    'thing',
    'location'
  ]
}
</script>

<style scoped>

</style>
