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
        </div>
      </section>

        <nuxt-link class="btn" to="/new-game">New game</nuxt-link>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      
    };
  },
  mounted() {
  }
}
</script>
