import LanguageClient from './client'

export default class LanguagePlugin {

  static client = new LanguageClient()

  static install(Vue, options) {
   Vue.prototype.$i = LanguagePlugin.client.load
   Vue.prototype.$setLang = LanguagePlugin.client.setLang
  }
}
