<template>
  <div>
    <h3 class="font-weight-bold">
      Details
    </h3>

    <table class="table table-sm table-hover table-borderless">
      <thead>
      <tr>
        <th scope="col" colspan="2">Apparaat:</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Type</th>
        <td>
          {{getMarkerType(thing).name}}
          <img :src="getMarkerType(thing).iconUrl">
        </td>
      </tr>
      <tr>
        <th scope="row">Naam</th>
        <td>{{thing.name}}</td>
      </tr>
      <tr>
        <th scope="row">Beschrijving</th>
        <td>{{thing.description}}</td>
      </tr>
      <tr>
        <th scope="row">Doel</th>
        <td>{{thing.purpose}}</td>
      </tr>
      <tr>
        <th scope="row">Referentie</th>
        <td>{{thing.ref}}</td>
      </tr>
      </tbody>
      <thead>
        <tr>
          <th scope="col" colspan="2">Plaats:</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Plaats</th>
        <td>{{location.name}}</td>
      </tr>
      <tr>
        <th scope="row">Referentie</th>
        <td>{{location.ref}}</td>
      </tr>
      </tbody>
    </table>

    <div>
      <button class="btn btn-primary" @click="contactOwner()">Contact eigenaar</button>
    </div>
  </div>
</template>

<script>
import { getMarkerType } from '@/services/iotmap'

export default {
  name: 'Thing',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    getMarkerType,
    contactOwner () {
      this.$router.push({
        name: 'InfoRequest',
        params: {
          thingId: this.thing.id,
          locationId: this.location.id
        }
      })
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
