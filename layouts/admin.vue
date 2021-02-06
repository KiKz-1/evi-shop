<template>
  <section class="admin">
        <nuxt-link to="/">Back to store</nuxt-link>
        <div class="view">
            <Nuxt keep-alive />
        </div>
  </section>
</template>

<style scoped>
.admin {
    padding: 25px;
}
.view {
    padding: 25px 0;
}
</style>