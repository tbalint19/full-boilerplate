import NotificationsClient from './client'
import config from './config'

export default class NotificationsPlugin {

  static client = new NotificationsClient(config)

  static install(Vue, options) {
   Vue.prototype.$addError = this.client.addError
   Vue.prototype.$addNote = this.client.addNote
   Vue.prototype.$addSuccess = this.client.addSuccess
   Vue.prototype.$deleteNotification = this.client.deleteNotification
   Vue.prototype.$notifications = this.client.messages
  }
}
