export default class Navigator {

  constructor(authManager, config) {
    this.authManager = authManager
    this.currentApp = null
    this.registeredApps = null
    this.init(config)
  }

  redirect(appName) {
    if (this.registeredApps && this.registeredApps[appName]) {
      let nextApp = this.getNextApp(appName)
      window.location.hash = nextApp
      this.currentApp = nextApp
    }
  }

  getNextApp(appName) {
    if (!this.registeredApps[appName].requiredRole) {
      return appName
    }
    if (this.authManager.roles.includes(this.registeredApps[appName].requiredRole)) {
      return appName
    } else {
      if (this.registeredApps[appName].fallbackApp) {
        getNextApp(this.registeredApps[appName].fallbackApp)
      }
      return null
    }
  }

  init(config) {
    this.registeredApps = config.apps
    let hashes = Object.values(this.registeredApps).map(app => app.hash)
    if (window.location.hash && hashes.includes(window.location.hash)) {
      this.redirect(window.location.hash)
    } else {
      console.log("in")
      console.log(window.location.hash)
      this.redirect(config.initialApp)
    }
  }

}
