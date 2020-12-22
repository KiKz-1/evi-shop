<template>
    <div class="header">
        <div><nuxt-link to="/">Evi-shop</nuxt-link></div>

        <div><nuxt-link to="/login">Login</nuxt-link></div>
        <div><nuxt-link to="/cart">Shopping cart</nuxt-link></div>
    </div>
</template>

<style scoped>
    .header {
        display: grid;
        grid-template-columns: 5fr 1fr 1fr;
        padding: 25px 0;
    }
</style>