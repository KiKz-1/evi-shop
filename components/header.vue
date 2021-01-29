<template>
    <div class="header">
        <div><nuxt-link to="/">Evi-shop</nuxt-link></div>
        <div><nuxt-link to="/cart">Shopping cart</nuxt-link></div>
        <div>
          <nuxt-link v-if="!isAuthenticated" to="/login">Login</nuxt-link>
          <a href @click="logout()" v-else>Logout</a>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
     ...mapGetters("authentication", ["isAuthenticated"])
  },
  methods: {
    logout() {
        this.$store.commit('authentication/setAuthenticatedUser', null)
        this.$store.commit('authentication/setIsAuthenticated', false)
        this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
    .header {
        display: grid;
        grid-template-columns: 5fr 1fr 1fr;
        padding: 25px 0;
    }
</style>
