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

export default {
  name: 'login',
  data () {
    return {
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
