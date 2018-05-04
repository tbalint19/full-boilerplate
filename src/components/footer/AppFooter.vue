<template>
  <footer class="fixed-bottom">
    <div class="container">
      <div class="space-between">
        <span>Brand 2018</span>
        <span>
          <button @click="$setLang('hu')" class="lang-button">
            <img class="button-img" src="../../../static/hun.jpeg"/>
          </button>
          <button class="lang-button" @click="$setLang('en')">
            <img class="button-img" src="../../../static/eng.jpeg"/>
          </button>
          <button class="lang-button" @click="$setLang('de')">
            <img class="button-img" src="../../../static/ger.jpeg"/>
          </button>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'app-footer',
  data () {
    return {
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
