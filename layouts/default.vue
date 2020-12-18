<template>
  <div>
    <Header />
    <Nuxt />
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
  font-size: 6rem;
  color: #35495e;
  letter-spacing: 1px;
}

.section {
  border: solid #eee 1px;
  box-shadow: 1px 1px 4px #eee;
  margin: 25px 0;
  padding: 25px;
}
</style>
