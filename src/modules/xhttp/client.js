import { httpGet, httpPost } from './xhttp'
import { mockFactory } from '../util/mock-utils'
import config from './config.json'

export default class Client {

  constructor() {
    this.prefix = config.baseUrl
    this.get = config.mock ? mockFactory(config).getMockResponse : httpGet
    this.post = config.mock ? mockFactory(config).getMockResponse : httpPost
  }

  login(email, password) { return this.post(this.prefix + "/auth/api/login", { email, password }) }

  renew() { return this.get(this.prefix + "/auth/api/renew") }

  logout() { return this.get(this.prefix + "/auth/api/logout") }

  getHello(name) { return this.get(this.prefix + "/example/api/hello/load?name=" + name) }

  postHello(name) { return this.post(this.prefix + "/example/api/hello/save", { name }) }

}
