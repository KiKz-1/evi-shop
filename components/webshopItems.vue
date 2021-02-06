<template>
  <section>
    <article v-for="(article, index) in articles" :key="index">
      <img :src="article.img" />
      <h4 class="title">{{article.product_name}}</h4>
      <p>{{article.description}}</p>
      <small class="price">{{article.price}}</small>
      <!-- Show the button if user is logged in. Maybe we can think of a way to still be able to add item and then
      automatically add them to the user chart after login -->
      <button v-if="isAuthenticated" @click="addToCart(article)">Add</button>
    </article>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import WebshopItems from '~/components/webshopItems.vue';

export default {
  components: {
    WebshopItems
  },
  data() {
    return {};
  },
  props: {
    articles: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapGetters('authentication', ['userId', 'isAuthenticated'])
  },
  methods: {
   async addToCart(item) {
     try {
       item.userId = this.userId
       await this.$http.$post(`/api/char`, item)
       alert(`Thank you for the ${item.price}.`)
     } catch (error) {
       throw new Error(error)
     }
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
        background-color: var(--white);
        border: solid 1px var(--white);
        padding: 15px;
        color: var(--secondary);
    }

    .title {
      margin: 10px 0;
    }

    .price {
      color: var(--quaternary);
      margin: 10px 0;
    }

    img {
      max-width: 100%;
      height: 144px;
      object-fit: cover;
    }

</style>
