<template>
  <div v-bind:class="classObject">
    <p class="msg-title">
      <span>{{ title }}</span>
      <button class="x-button" @click="close(id)"><font-awesome-icon icon="share"/></button>
    </p>
    <p class="msg-txt">{{ text }}</p>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faShare from '@fortawesome/fontawesome-free-solid/faShare'

export default {
  name: 'notificationmsg',
  data () {
    return {
      isRemoved: false
    }
  },
  props: {
    id: String,
    title: String,
    text: String,
    msgType: String
  },
  methods: {
    close: function(id) {
      this.isRemoved = true
      setTimeout(() => this.$deleteNotification(id), 350)
    }
  },
  computed: {
    classObject: function () {
    return {
      'notification': true,
      'msg-arrive': !this.isRemoved,
      'msg-remove': this.isRemoved,
      'bg-success': this.msgType == "SUCCESS",
      'bg-danger': this.msgType == "ERROR",
      'bg-info': this.msgType == "NOTE"
    }
  }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.notification {
  margin: 20px;
  border-radius: 3px;
  box-shadow: 0 0 5px #555;
  color: white;
}

.msg-arrive {
  animation: msgArrive 7s ease-out forwards;
}

@keyframes msgArrive {
  0% { transform: translateX(300px); opacity: 0; }
  10% { transform: translateX(0px); opacity: 0.9; }
  95% { transform: translateX(0px); opacity: 0.9; }
  100% { transform: translateX(50px); opacity: 0; }
}

.msg-remove {
  animation: msgRemove 0.35s ease-out forwards;
}

@keyframes msgRemove {
  0% { transform: translateX(0px); opacity: 0.9; }
  100% { transform: translateX(50px); opacity: 0; }
}

.msg-txt {
  text-align: justify;
  padding: 20px;
  padding-top: 0;
  margin: 0;
}

.msg-title {
  padding: 5px;
  text-align: center;
  margin: 0;
}

.x-button {
  margin: 0 !important !important !important;
  background-color: transparent;
  border: 0;
  color: white;
  float: right;
  cursor: pointer;
}

.x-button:focus {
  outline: 0;
}
</style>
