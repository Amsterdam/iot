<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="contactAanvraag" tabindex="-1" role="dialog" aria-labelledby="contactAanvraag" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Contact Aanvraag</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <info-request-form :thing="thing"></info-request-form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuleren</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import InfoRequestForm from './InfoRequestForm'

export default {
  name: 'InfoRequestModal',
  components: {InfoRequestForm},
  props: [
    'thing'
  ],
  methods: {
    startRequest () {
      $('#contactAanvraag').modal({show: true, focus: true, backdrop: false})
    }
  }
}
</script>

<style scoped>

</style>
