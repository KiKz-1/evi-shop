<template>
<div>
    <section>
        <div class="block">
            <h3>Add new product</h3>
                <!-- Add new product -->
            <article>
                <input placeholder="Product name" v-model="product_name" />
                <textarea placeholder="Product description" v-model="description" />
                <input placeholder="Product price" v-model="price" />
                <input placeholder="Product image" v-model="img" />
                <button @click="AddArticle">Add</button>
            </article>
        </div>

        <div class="block">
            <h3>Product list</h3>
                <!-- products -->
        </div>             
    </section>
</div>
</template>

<script>
export default {
  layout(context) {
    return "admin";
  },
  data: () => {
      return {
          product_name: '',
          description: '',
          price: '',
          img: ''
      }
  },
  methods: {
      AddArticle() {          
          var product = {
              product_name: this.product_name.toString(),
              description: this.description.toString(),
              price: this.price.toString(),
              img: this.img.toString()
          }
          
          this.$http.$post('/api/AddArticle', product)
      }
  }
}
</script>

<style scoped>
section {
    display: flex;
}

input, textarea {
    display: block;
    margin: 5px 0;
}

.block {
    border: solid 1px #ccc;
    padding: 25px;
    min-width: 500px;
}
</style>