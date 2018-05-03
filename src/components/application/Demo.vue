<template>
  <div class="demo">
    <button class="btn btn-outline-warning btn-block" @click="triggerGet()" v-bind:disabled="getLoading">
      Trigger mock get
      <font-awesome-icon icon="spinner" v-bind:spin="getLoading"/>
    </button>
    <button class="btn btn-outline-warning btn-block" @click="triggerPost()" v-bind:disabled="postLoading">
      Trigger mock post
      <font-awesome-icon icon="spinner" v-bind:spin="postLoading"/>
    </button>
    <hr>
    <button class="btn btn-outline-success btn-block" @click="triggerSuccess()">Trigger success message</button>
    <button class="btn btn-outline-danger btn-block" @click="triggerError()">Trigger error message</button>
    <button class="btn btn-outline-info btn-block" @click="triggerNote()">Trigger note message</button>
    <hr>
    <button class="btn btn-outline-primary btn-block" @click="openModal()">Open empty modal</button>

    <AppModal v-if="modalOpen" v-bind:title="'Demo modal'" v-bind:close="closeModal.bind(this)">
      <h4>Hello world</h4>
    </AppModal>
  </div>
</template>

<script>
import AppModal from '../abstract/AppModal'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'demo',
  data () {
    return {
      modalOpen: false,
      getLoading: false,
      postLoading: false
    }
  },
  methods: {
    triggerGet: function() {
      this.getLoading = true
      this.$client.login().then(r => { this.getLoading = false; this.$addSuccess("Get", "arrived") })
    },
    triggerPost: function() {
      this.postLoading = true
      this.$client.login().then(r => { this.postLoading = false; this.$addSuccess("Post", "arrived") })
    },
    triggerSuccess: function() {
      this.$addSuccess("asdasd", "asdasd asdasd adasd")
    },
    triggerError: function() {
      this.$addError("asdasd", "asdasd asdasd adasd")
    },
    triggerNote: function() {
      this.$addNote("asdasd", "asdasd asdasd adasd")
    },
    openModal: function() {
      this.modalOpen = true
    },
    closeModal: function() {
      this.modalOpen = false
    }
  },
  components: {
    AppModal,
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.demo {

}
</style>
