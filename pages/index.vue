<template>
  <div>
      <section class="section">
        <!-- Webshop items -->
        <WebshopItems v-if="Object.keys(articles).length > 0" :articles="articles" />
        <p v-else>{{ serviceNotAvailable }}</p>
      </section>
  </div>
</template>

<script>
import WebshopItems from '~/components/webshopItems.vue';
import {serviceNotAvailable} from '@/mixins/errorMessage.js';

export default {
  components: {
    WebshopItems
  },
  mixins: [serviceNotAvailable],
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
      console.error(error);
    }
  }
}
</script>
