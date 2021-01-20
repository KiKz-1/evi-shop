<template>
<div>
    <section>
        <div class="block">
            <h3>Add new product</h3>
                <!-- Add new product -->
            <article>
                <input placeholder="Product name" />
                <textarea placeholder="Product description" />
                <input placeholder="Product price" />
                <input placeholder="Product image" />
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
  methods: {
      AddArticle() {
          console.log('click')
          this.$http.$post('/api/AddArticle', {})
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