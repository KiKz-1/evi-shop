<template>
  <div>
    <Nuxt />
  </div>
</template>

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

.subtitle {  
  display: block;
  font-weight: 300;
  font-size: 4rem;
  color: #35495e;
  letter-spacing: 1px;
}

.section {
  border: solid #eee 1px;
  box-shadow: 1px 1px 4px #eee;
  margin: 25px 0;
  padding: 25px;
}

.game-list {
  padding: 25px;
}

.btn {
  display: inline-block;
  padding: 20px;
  background-color: #eee;
  border: solid 1px #ccc;
  color: rgba(46, 46, 46, 0.87);
  transition: background-color .25s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
}

.btn:hover {  
  cursor: pointer;
  background-color: #ccc;
}

.btn-back {
  display: inline-flex;
  padding: 10px;
  text-decoration: none;
  color: rgba(46, 46, 46, 0.87);
  justify-content: space-between;
  min-width: 80px;
}

.field {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin: 25px;
}

.input {
  padding: 5px 15px;
}

.list {
  padding: 0;
  list-style: none;
}

.list-item {
  border: solid 1px #eee;
  padding: 5px;
}
</style>
