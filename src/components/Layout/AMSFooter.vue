<template>
  <footer class="container-fluid mt-2 pt-2 pb-1">
    <div>
      <h2>Disclaimer</h2>
      <p>
        {{title}} is gemaakt door {{author}}.
      </p>
      <p>
        De inhoud van {{title}} is met uiterste zorgvuldigheid tot stand gebracht.
        De inhoud wordt regelmatig gecontroleerd en geactualiseerd.
      </p>
      <p>
        {{author}} kan echter niet aansprakelijk worden gesteld voor de juistheid, volledigheid en actualiteit van de website.
        {{author}} kan in het bijzonder niet aansprakelijk worden gesteld voor eventuele schade of consequenties ontstaan door direct of indirect gebruik van de inhoud van de website.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AMSFooter',
  props: [
    'title'
  ],
  data () {
    return {
      author: 'De Gemeente Amsterdam, OIS'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
