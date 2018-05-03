export default class Notification {

  constructor(title, text, msgType) {
    this.id = this.generateId(10)
    this.title = title
    this.text = text
    this.msgType = msgType
    this.isRemoved = false
  }

  generateId(number) {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < number; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
