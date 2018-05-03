<template>
  <div class="notifications">
    <NotificationMSG v-for="notification in $notifications" v-bind:key="notification.id"
      v-bind:id="notification.id"
      v-bind:msgType="notification.type"
      v-bind:title="notification.title"
      v-bind:text="notification.text">
    </NotificationMSG>
  </div>
</template>

<script>
import NotificationMSG from './NotificationMSG'

export default {
  name: 'notifications',
  data () {
    return {
    }
  },
  components: {
    NotificationMSG
  }
}
</script>

<style scoped>
.notifications {
  position: fixed;
  z-index: 100000;
  top: 65px;
  right: 65px;
  width: 300px;
}
</style>
