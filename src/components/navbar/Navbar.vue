<template>
  <nav class="navbar navbar-light bg-light">
    <span class="navbar-brand mb-0 h1" @click="getHome()">{{ $i("navbar.title") }}</span>
    <Login v-if="!auth.user"></Login>
    <Logout v-if="auth.user"></Logout>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import Login from './Login'
import Logout from './Logout'
import {AUTH} from '../../modules/auth.js'
import {NAVIGATOR} from '../../modules/navigator.js'
import {ACTION} from '../../main.js'

export default {
  name: 'navbar',
  data () {
    return {
      auth: AUTH
    }
  },
  methods: {
    getHome: function() {
      NAVIGATOR.redirect("welcome")
    }
  },
  components: {
    FontAwesomeIcon,
    Login,
    Logout
  }
}
</script>

<style scoped>

</style>
