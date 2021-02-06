<template>
  <div class="layout">
    <Header />
    <Nuxt keep-alive />
  </div>
</template>

<script>
import Header from '~/components/header.vue';

export default {
  components: {
    Header
  }
}
</script>
<style>
html {
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 80vw;
  margin: 0 auto;
}
</style>
