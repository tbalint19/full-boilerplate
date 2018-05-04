<template>
  <div id="app">
    <navbar></navbar>
    <application></application>
    <notifications></notifications>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './navbar/Navbar'
import Application from './application/Application'
import Notifications from './notifications/Notifications'
import AppFooter from './footer/AppFooter'

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
