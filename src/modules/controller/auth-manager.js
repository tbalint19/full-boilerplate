export default class AuthManager {

  constructor() {
    this.user = null
    this.roles = []
    this.permissions = []
    this.init()
  }

  load() {
    let payload = this.parseJwt(localStorage.getItem("auth-token"))
    this.user = payload.email
    this.roles = payload.roles
    this.permissions = payload.permissions
  }

  parseJwt(token) {
    var base64Url = token.split('.')[1]
    var base64 = base64Url.replace('-', '+').replace('_', '/')
    return JSON.parse(window.atob(base64))
  }

  loggedInAs(role) {
    return this.roles.includes(role)
  }

  loggedInWith(permission) {
    return this.permissions.includes(permission)
  }

  init() {
    if (localStorage.getItem("auth-token")) {
      this.load()
    } else {
      this.user = null,
      this.roles = []
    }
  }

}
