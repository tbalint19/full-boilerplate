<template>
  <div id="app">
    <navbar></navbar>
    <application></application>
    <notifications></notifications>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar'
import Application from './components/application/Application'
import Notifications from './components/notifications/Notifications'
import AppFooter from './components/footer/AppFooter'

export default {
  name: 'root',
  components: {
    Application,
    Notifications,
    Navbar,
    AppFooter
  }
}
</script>

<style>

</style>
