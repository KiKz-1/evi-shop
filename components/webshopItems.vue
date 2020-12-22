<template>
  <section>
        <article v-for="(item, index) in items" :key="index">
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>
          <img :src="item.imgsrc" />
          <small>{{item.price}}</small>
          <button @click="addToCart(item.price)">Add</button>
        </article>
  </section>
</template>

<script>
import WebshopItems from '~/components/webshopItems.vue';
import fakeItems from '~/static/fakeitems.json'

export default {
  components: {
    WebshopItems
  },
  data() {
    return {
      items: fakeItems
    };
  },
  methods: {
    addToCart($$$) {
      alert(`Thank you for the ${$$$}`)
    }
  }
}
</script>

<style scoped>
    section {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 1fr;
    }
    article {
        background-color: #eee;
        border: solid 1px #ccc;
        padding: 15px;

    }
    
</style>
