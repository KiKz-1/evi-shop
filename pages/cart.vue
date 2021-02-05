<template>
<div>
  <h2>My shopping cart</h2>
  <br />
  <section v-if="items.length">
        <article v-for="(item, index) in items" :key="index">
          <img :src="item.imgsrc" />
          <h4>{{item.title}}</h4>
          <p>{{item.description}}</p>
          <small>{{item.price}}</small>
          <button @click="removeFromChar(item)">Remove</button>
        </article>
  </section>
  <p v-else>The shopping cart is empty.</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      items: []
    }
  },
  computed: {
    ...mapGetters('authentication', ['userId', 'isAuthenticated'])
  },
  async mounted() {
    try {
      if(this.isAuthenticated) {
        this.items = await this.$http.$get(`/api/char/${this.userId}`)
      }
    } catch (error) {
      throw new Error(error)
    }
  },
  methods: {
    async removeFromChar(article) {
      try {
         await this.$http.$delete(`/api/char/${article.id}`)
          alert(`You have successfully removed ${article.title} from the shopping cart.`)
          // Fetch items again to update the list
          this.items = await this.$http.$get(`/api/char/${this.userId}`)
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
