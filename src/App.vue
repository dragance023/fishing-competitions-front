<template>
  <div id="app">
    <NavigationComponent />
    <router-view />
    <modal name="create-modal"> This is my first modal </modal>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'

export default {
  name: 'App',
  components: {
    NavigationComponent,
  }
}
</script>

<style>
@import 'bulma/css/bulma.css';
</style>
