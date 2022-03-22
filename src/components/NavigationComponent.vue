<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/competitions">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
          Home
        </router-link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a @click="show" class="button is-primary js-modal-trigger">
                <strong>Create</strong>
              </a>
            </div>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Account</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationComponent',
  methods: {
    show() {
      this.$modal.show('create-modal');
    },
    hide() {
      this.$modal.hide('create-modal');
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
