<template>
  <div v-if="thing">
    <h3>Details</h3>

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

    <h5>Plaatsing</h5>

    <div class="font-weight-bold">Plaats</div>
    <p>{{location.name}}</p>

    <div class="font-weight-bold">Referentie</div>
    <p>{{location.ref}}</p>
  </div>
</template>

<script>
import Card from '@/components/Layout/Card'

export default {
  name: 'Thing',
  components: {
    Card
  },
  props: [
    'thing',
    'location'
  ]
}
</script>

<style scoped>

</style>
