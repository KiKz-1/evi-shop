<template>
  <section>
    <div class="container">
        <div>
          <h2>Login!</h2>
          <form method="post" @submit.prevent="login()">
            <div>
              <label>Email</label>
              <div>
                <input
                  type="email"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div>
              <button :disabled="!email || !password" type="submit">Log In</button>
            </div>
          </form>
          <div v-if="showError">{{ errorMessage }}</div>
        </div>
      </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { users } from "~/assets/fakeUsers"

export default {
  data() {
    return {
      email: '',
      password: '',
      users,
      errorMessage: null,
      showError: false
    }
  },
  methods: {
    login() {
      this.showError = false
      const loggedInUser = this.users.find(u => u.email == this.email)

      if(!loggedInUser) {
        this.errorMessage = "User doesn't exist"
        this.showError = true
        return
      }

      if(loggedInUser.password !== this.password) {
        this.errorMessage = "Invalid password"
        this.showError = true
      } else {
        this.$store.commit('authentication/setAuthenticatedUser', loggedInUser)
        this.$store.commit('authentication/setIsAuthenticated', true)
        this.$router.replace("/")
      }
    }
  }
}
</script>

<style>
.container {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
 }
</style>
