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
          <button @click="removeFromChar(item.id)">Remove</button>
        </article>
  </section>
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
    ...mapGetters('authentication', ['userId'])
  },
  async mounted() {
    this.items = await this.$http.$get(`/api/char/${this.userId}`)
  },
  methods: {
    removeFromChar(id) {
      // Implement delete
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
