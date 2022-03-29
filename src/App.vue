<template>
  <div id="app">
    <NavigationComponent />
    <router-view />
    <CreateModalComponent />
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'
import CreateModalComponent from './components/CreateModalComponent.vue'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    NavigationComponent,
    CreateModalComponent
  },
  methods: {
    ...mapActions('auth', ['checkAuth']),
  },
  created() {
    this.checkAuth();
  }
}
</script>

<style>
@import 'bulma/css/bulma.css';
</style>
