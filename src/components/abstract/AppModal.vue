<template>
  <div id="app-modal">

    <div id="app-modal-background" class="app-modal-appear"></div>

    <div id="app-modal-container" class="app-modal-flyin">
      <div id="app-modal-header">
        <h4 id="app-modal-title">{{ title }}</h4>
        <button id="app-modal-close-button" @click="closeModal()">
          <font-awesome-icon icon="power-off"/>
        </button>
      </div>
      <hr>
      <slot></slot>
    </div>

  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'

export default {
  name: 'AppModal',
  data () {
    return {

    }
  },
  props: {
    title: String,
    close: Function
  },
  methods: {
    closeModal: function () {
      document.getElementById('app-modal-background').classList.add("app-modal-disappear")
      document.getElementById('app-modal-container').classList.add("app-modal-flyaway")
      setTimeout(() => {
        this.close()
      }, 500)
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
#app-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000000;
}

#app-modal-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  z-index: 1000001;
}

#app-modal-container {
  position: absolute;
  left: 30%;
  width: 40%;
  top: 10vh;
  min-height: 30vh;
  background-color: white;
  z-index: 1000002;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 0 15px #555;
}

#app-modal-header {
  display: flex;
  justify-content: space-between;
}

#app-modal-title {

}

#app-modal-close-button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

#app-modal-close-button:focus {
  outline: 0;
  padding: 5px;
  color: grey;
}

.app-modal-flyin {
  animation: flyin 0.5s ease-out forwards;
}

.app-modal-appear {
  animation: appear 0.5s ease-out forwards;
}

.app-modal-flyaway {
  animation: flyaway 0.5s ease-out forwards;
}

.app-modal-disappear {
  animation: disappear 0.5s ease-out forwards;
}

@keyframes appear {
  0% { opacity: 0; }
  100% { opacity: 0.5; }
}

@keyframes disappear {
  0% { opacity: 0.5; }
  100% { opacity: 0; }
}

@keyframes flyin {
  0% { top: -30vh; opacity: 0.5; }
  100% { top: 10vh; opacity: 1; }
}

@keyframes flyaway {
  0% { top: 10vh; opacity: 1; }
  100% { top: -30vh; opacity: 0.5; }
}
</style>
