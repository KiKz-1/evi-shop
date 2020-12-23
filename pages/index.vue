<template>
  <div>
      <h1 class="title">
        Evi-shop
      </h1>

      <section class="section">
        <!-- Webshop items -->
        <WebshopItems />
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
      
    };
  }
}
</script>
