import Notification from './notification'

export default class NotificationsClient {

  constructor(config) {
    this.defaultTimeout = config.timeToLive*1000 || 5000
    this.messages = []
  }

  createNotification(type, title, text, duration) {
    this.messages.push(new Notification(title, text, type))
    setTimeout(() => this.deleteNotification(id), duration)
  }

  deleteNotification(id) {
    let msg = this.getById(id)
    if (msg && !msgRemove.isRemoved) {
      msg.isRemoved = true
      setTimeout(() => this.deleteById(id), 300)
    }
  }

  deleteById(id) {
    let index = this.messages.map(msg => msg.id).indexOf(id)
    if (index !== -1) this.messages.splice(index, 1)
  }

  getById(id) {
    return this.messages.find(msg => msg.id)
  }

  addError(title, message, duration=this.defaultTimeout) {
    this.createNotification("ERROR", title, message, duration)
  }

  addSuccess(title, message, duration=this.defaultTimeout) {
    this.createNotification("SUCCESS", title, message, duration)
  }

  addNote(title, message, duration=this.defaultTimeout) {
    this.createNotification("NOTE", title, message, duration)
  }

}
