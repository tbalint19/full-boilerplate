import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from "bootstrap-vue"
import HttpPlugin from './modules/xhttp/plugin'
import LanguagePlugin from './modules/i18n/plugin'
import NotificationsPlugin from './modules/notifications/plugin'

import Root from './components/Root'

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import faBan from '@fortawesome/fontawesome-free-solid/faBan'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers'
import faShare from '@fortawesome/fontawesome-free-solid/faShare'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import faPowerOff from '@fortawesome/fontawesome-free-solid/faPowerOff'
import faMobileAlt from '@fortawesome/fontawesome-free-solid/faMobileAlt'
import faCommentAlt from '@fortawesome/fontawesome-free-solid/faCommentAlt'
import faAddressBook from '@fortawesome/fontawesome-free-solid/faAddressBook'
import faCommentSlash from '@fortawesome/fontawesome-free-solid/faCommentSlash'
fontawesome.library.add(brands, faBan, faSpinner, faMobileAlt, faUser, faUsers, faCommentAlt, faAddressBook, faPowerOff, faShare, faCommentSlash)

Vue.config.productionTip = false

export const ACTION = new Vue()

Vue.use(BootstrapVue)
Vue.use(HttpPlugin)
Vue.use(LanguagePlugin)
Vue.use(NotificationsPlugin)

new Vue({
  el: '#root',
  template: '<Root/>',
  components: { Root }
})
