<template>
  <div class="form-inline">
    <input class="form-control mr-sm-2" v-bind:placeholder="$i('login.username')" type="text">
    <input class="form-control mr-sm-2" v-bind:placeholder="$i('login.password')" type="password">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
      <font-awesome-icon icon="spinner" v-bind:spin="false"/>
      {{ $i('login.button') }}
    </button>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import {AUTH} from '../../modules/auth.js'

export default {
  name: 'login',
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
