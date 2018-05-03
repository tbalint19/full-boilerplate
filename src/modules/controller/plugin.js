import Navigator from './navigator'
import AuthManager from './auth-manager'
import config from './config.json'

export default class ControllerPlugin {

  static navigator = new Navigator(new AuthManager(), config)

  static install(Vue, options) {
   Vue.prototype.$nav = ControllerPlugin.navigator.redirect
   Vue.prototype.$loggedInAs = ControllerPlugin.navigator.authManager.loggedInAs
   Vue.prototype.$loggedInWith = ControllerPlugin.navigator.authManager.loggedInWith
  }
}
