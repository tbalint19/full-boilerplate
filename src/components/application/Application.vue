<template>
  <div class="container">
    <div class="application">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">

          <!-- Remove -->
          <demo></demo>
          <!-- Remove -->

        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Remove and delete file
import Demo from './Demo'
// Remove and delete file

export default {
  name: 'application',
  data () {
    return {
    }
  },
  components: {

    // Remove
    Demo
    // Remove
  }
}
</script>

<style scoped>
.application {
  padding-top: 25px;
}
</style>
