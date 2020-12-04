<template>
  <div class="container">
    <div>
      <h1 class="title">
        EviMatch
      </h1>

      <section class="section">
        <div class="game-list">
          Matched Games
        </div>
        <div class="game-list">
          Queued Games
          <ul v-if="queuedGames != undefined" class="list">
            <li class="list-item" v-for="(game, index) in queuedGames" :key="index">
              <p>{{game.name}}</p>
              <p>Players: {{game.playerAmount}}</p>
            </li>
          </ul>
        </div>
      </section>

        <nuxt-link class="btn" to="/new-game">New game</nuxt-link>

        <nuxt-link class="btn" to="/my-games">My game(s)</nuxt-link>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  async asyncData({ $http }) {
    try {
      const queuedGames = await $http.$get('/api/queuedGame')
      return { queuedGames }
    } catch (err) {
      console.error(err)
    }      
  }
}
</script>
