<template>
  <div class="l-single-competition">
    <section class="section">
      <h1 class="title">Login</h1>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input v-model="userData.username" class="input" type="email" placeholder="Email" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input v-model="userData.password" class="input" type="password" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="handleLogin" class="button is-link">Submit</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SingleCompetitionView',
  data() {
    return {
      userData: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('auth', ['loginAction']),
    handleLogin() {
      this.loginAction(this.userData);
    },
  }
};
</script>
<style scoped>
.section {
  max-width: 60%;
  margin: 0 auto;
}
</style>
