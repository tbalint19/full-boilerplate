import Client from './client'

export default class HttpPlugin {

  static client = new Client();

  static install(Vue, options) {
   Vue.prototype.$client = HttpPlugin.client
  }
}
