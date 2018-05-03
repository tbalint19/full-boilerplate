<template>
  <div class="form-inline">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="logout()">
      <font-awesome-icon icon="spinner" v-bind:spin="false"/>
      Logout
    </button>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import {AUTH} from '../../modules/auth.js'

export default {
  name: 'logout',
  data () {
    return {
      auth: AUTH
    }
  },
  methods: {

  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>
