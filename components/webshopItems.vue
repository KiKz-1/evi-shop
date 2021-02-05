<template>
  <section>
        <article v-for="(item, index) in items" :key="index">
          <img :src="item.imgsrc" />
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>
          <small>{{item.price}}</small>
          <button @click="addToCart(item)">Add</button>
        </article>        
  </section>
</template>

<script>
import WebshopItems from '~/components/webshopItems.vue';
import fakeItems from '~/assets/fakeItems.json'

export default {
  components: {
    WebshopItems
  },
  data() {
    return {
      items: fakeItems
    };
  },
  async asyncData({ params, $http}) {
    
  },
  async fetch() {
    
  },
  mounted() {
    
  },
  methods: {
    addToCart(item) {
      
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
        display: flex;
        flex-flow: column nowrap;
        background-color: #eee;
        border: solid 1px #ccc;
        padding: 15px;

    }
    img {
      max-width: 100%;
      height: 144px;
      object-fit: cover;
    }
    
</style>
