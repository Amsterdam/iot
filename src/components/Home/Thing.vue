<template>
  <div v-if="thing">
    <h4>{{thing.name}}</h4>
    <p class="font-weight-bold">{{thing.device_type}}</p>

    <div class="font-weight-bold">Beschrijving</div>
    <p>{{thing.description}}</p>

    <div class="font-weight-bold">Doel</div>
    <p>{{thing.purpose}}</p>

    <div class="font-weight-bold">Referentie</div>
    <p>{{thing.ref}}</p>

    <div class="font-weight-bold">ID</div>
    <p>{{thing.id}}</p>

    <div class="font-weight-bold">Plaats</div>
    <p>{{location.name}}</p>

    <div class="font-weight-bold">Referentie</div>
    <p>{{location.ref}}</p>

    <div class="font-weight-bold">ID</div>
    <p>{{location.id}}</p>
  </div>
</template>

<script>

export default {
  name: 'Thing',
  props: [
    'thing',
    'location'
  ]
}
</script>

<style scoped>

</style>
