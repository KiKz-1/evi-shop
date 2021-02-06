<template>
    <div class="header">
        <div>
            <nuxt-link to="/">
                <h1 class="title"><span class="evi">Evi</span>-shop</h1>
            </nuxt-link>
        </div>

        <div>
            <nuxt-link to="/cart">Shopping cart</nuxt-link>
        </div>

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

    .title {
        display: inline-block;
    }

    .title:hover {
        color: var(--primary);
    }

    .evi {
        position: relative;
        transition: color 150ms ease-in-out;
    }

    .evi:after {
        content: '';
        display: block;
        position: absolute;
        left: 25px;
        width: 100px;
        height: 3px;
        background-color: var(--primary);
        opacity: 0;
        transition: left 150ms ease-in-out, opacity 250ms ease-in-out;
    }

    .title:hover .evi {
        color: var(--white);
    }

    .title:hover .evi:after {
        opacity: 1;
        left: 0;
        background-color: var(--white);
    }
</style>
