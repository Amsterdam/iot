<template>
  <div v-if="thing">
    <h2 class="font-weight-bold">Object: {{thing.name}}</h2>
    <h3 class="font-weight-bold">Type: {{thing.device_type}}</h3>
    <div class="row">
      <div class="col-9">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="naam" :class="{invalid: errors.has('naam')}">Uw naam</label>
            <input v-model="request.name" v-validate="'required'" type="text" class="form-control" id="naam" name="naam" placeholder="Naam">
          </div>
          <div class="form-group">
            <label for="email" :class="{invalid: errors.has('email')}">Uw E-mail adres</label>
            <input v-model="request.email"  v-validate="'required|email'" type="text" class="form-control" id="email" name="email" placeholder="E-mail adres">
            <small id="emailHelp" class="form-text text-muted">Uw gegevens worden niet opgeslagen in dit register.</small>
          </div>
          <div class="form-check mb-2">
            <input v-model="request.requestAccess" type="checkbox" class="form-check-input" id="toegang">
            <label class="form-check-label" for="toegang">Ik wil toegang tot de data uit dit object</label>
          </div>
          <div class="form-group">
            <label for="titel">Titel van uw vraag</label>
            <input v-model="request.title" type="text" class="form-control" id="titel" placeholder="Titel">
          </div>
          <div class="form-group">
            <label for="motivatie">Motivatie</label>
            <input v-model="request.motivation" type="text" class="form-control" id="motivatie" name="motivatie" placeholder="Motivatie">
          </div>
          <div class="form-group">
            <label for="vraag" :class="{invalid: errors.has('vraag')}">Uw vraag</label>
            <textarea v-model="request.question" v-validate="'required'" rows="10" class="form-control" id="vraag" name="vraag" placeholder="Vraag"></textarea>
          </div>
          <div class="form-check">
            <input v-model="request.acceptConditions" v-validate="{required: true}" type="checkbox" class="form-check-input" id="voorwaarden" name="voorwaarden">
            <label class="form-check-label" :class="{invalid: errors.has('voorwaarden')}" for="voorwaarden">
              Ik accepteer de <a href="#">algemene voorwaarden</a>
            </label>
          </div>
          <button type="submit" class="btn btn-primary mt-2">Versturen</button>
        </form>
      </div>
      <div class="col-3">
        <p>Let op:</p>
        <ul>
          <li>Uw vraag wordt doorgestuurd naar de eigenaar door deze website.</li>
          <li>Uw gegevens worden niet opgeslagen in dit register.</li>
          <li>De eigenaar van het object ontvangt uw mailadres om contact op te nemen met u.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoRequestForm',
  props: [
    'thing'
  ],
  data () {
    return {
      request: {
        requestAccess: false,
        name: '',
        email: '',
        title: '',
        motivation: '',
        question: '',
        acceptConditions: false
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$validator.validateAll()
    }
  }
}
</script>

<style scoped>
  .invalid {
    color: red;
  }
</style>
