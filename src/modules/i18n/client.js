import Vue from 'vue'
import config from './language-config'

export default class LanguageClient {

  constructor() {
    this.chosenLang = "hu"
    this.core = new Vue({ data: { dictionary: config[this.chosenLang] } })
    this.setLang = this.setLang.bind(this)
    this.load = this.load.bind(this)
  }

  setLang(language) {
    this.chosenLang = language
    this.core.dictionary = config[language]
  }

  load(textRef) {
    return this.core.dictionary[textRef] || textRef + ":" + this.chosenLang
  }

}
