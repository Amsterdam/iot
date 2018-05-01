<template>
  <div>
    <h3 class="font-weight-bold">Details</h3>

    <table class="table table-sm table-hover">
      <thead>
      <tr>
        <th scope="col" colspan="2">Apparaat:</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">Type</th>
        <td>{{thing.device_type}}</td>
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
export default {
  name: 'Thing',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    contactOwner () {
      this.$router.push({
        name: 'InfoRequest',
        params: {
          id: this.thing.id
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
