import Notification from './notification'

export default class NotificationsClient {

  constructor(config) {
    this.defaultTimeout = config.timeToLive*1000 || 3000
    this.messages = []
    this.createNotification = this.createNotification.bind(this)
    this.deleteNotification = this.deleteNotification.bind(this)
    this.deleteById = this.deleteById.bind(this)
    this.getById = this.getById.bind(this)
    this.addError = this.addError.bind(this)
    this.addSuccess = this.addSuccess.bind(this)
    this.addNote = this.addNote.bind(this)
  }

  createNotification(type, title, text, duration) {
    let notification = new Notification(title, text, type)
    this.messages.push(notification)
    setTimeout(() => this.deleteNotification(notification.id), duration)
  }

  deleteNotification(id) {
    let msg = this.getById(id)
    if (msg && !msg.isRemoved) {
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
