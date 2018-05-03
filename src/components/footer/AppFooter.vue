<template>
  <footer class="fixed-bottom">
    <div class="container">
      <div class="space-between">
        <span>Brand 2018</span>
        <span>
          <button @click="$setLang('hu')" class="lang-button">
            <img class="button-img" src="../../_assets/hun.jpeg"/>
          </button>
          <button class="lang-button" @click="$setLang('en')">
            <img class="button-img" src="../../_assets/eng.jpeg"/>
          </button>
          <button class="lang-button" @click="$setLang('de')">
            <img class="button-img" src="../../_assets/ger.jpeg"/>
          </button>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import {AUTH} from '../../modules/auth.js'

export default {
  name: 'app-footer',
  data () {
    return {
      auth: AUTH
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.space-between {
  display: flex;
  justify-content: space-between;
}

.lang-button {
  padding: 0;
  border: 0;
  cursor: pointer;
}

.lang-button:focus {
  outline: 0;
}

.button-img {
  width: 35px;
  height: 35px;
}
</style>
