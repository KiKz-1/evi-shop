<template>
  <div>
      <h1 class="title">
        Evi-shop
      </h1>

      <section class="section">
        <!-- Webshop items -->
        <WebshopItems :articles="articles" />
      </section>
  </div>
</template>

<script>
import WebshopItems from '~/components/webshopItems.vue';

export default {
  components: {
    WebshopItems
  },
  data() {
    return {
      articles: {}
    };
  },
  async asyncData({$http}) {
    try {
      const articles = await $http.$get('/api/GetArticles')
      return {articles}
    } catch (error) {
      throw new Error(error)
    }
  }
}
</script>
