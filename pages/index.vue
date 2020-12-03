<template>
  <div class="container">
    <div>
      <h1 class="title">
        EviMatch
      </h1>

      <div class="game-lists">
        <div class="game-list">
          Matched Games
        </div>
        <div class="game-list">
          Queued Games
        </div>
      </div>

      <div class="buttons-group">
        <nuxt-link class="button--green" to="/new-game">Queue new games</nuxt-link>
      </div>

      {{message}}

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: 'API message'
    };
  },
  async asyncData() {
    // axios.get('api/message')
    //     .then((response) => {
    //       this.message = response.data;
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
  },
  mounted() {
  }
}
</script>

<style>
body {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {  
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.game-lists {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);  
}

.game-list {
  border: solid #eee 1px;
  padding: 20px;
}

.buttons-group {
  margin-top: 25px;
}

.button--green:hover, .button--grey {
  cursor: pointer;
}
</style>
