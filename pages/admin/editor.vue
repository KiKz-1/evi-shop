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
                <ol>
                    <li class="list-item"
                      v-for="(article, index) in articles" :key="index">
                        <span class="product-name">{{ article.product_name }}</span>
                        <span class="remove" @click="removeArticle(article)">X</span>
                    </li>
                </ol>
        </div>             
    </section>
</div>
</template>

<script>
export default {
  layout(context) {
    return "admin";
  },
  data() {
    return {
        articles: {},
        product_name: '',
        description: '',
        price: '',
        img: ''
    }
  },
  async asyncData({$http}) {
    try {
      const articles = await $http.$get('/api/GetArticles')
      return {articles}
    } catch (error) {
      throw new Error(error)
    }
  },
  async fetch() {
    try {
      this.articles = await fetch('/api/GetArticles').then(res => res.json());
    } catch (error) {
      throw new Error(error)
    }
  },
  methods: {
      AddArticle() {
        var self = this;

        var product = {
            product_name: this.product_name.toString(),
            description: this.description.toString(),
            price: this.price.toString(),
            img: this.img.toString()
        }

        this.$http.$post('/api/AddArticle', product).finally(function() {
            // fetch updated article list
            self.$fetch();
        });
      },
      async removeArticle(article) {
        var self = this;
        try {
          await this.$http.$delete(`/api/DeleteArticle/${article.id}`).finally(function () {
            // fetch updated article list
            self.$fetch();
          });
        } catch (error) {
          throw new Error(error)
        }
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

.list-item {
  padding: 10px;
}

.remove {
  font-size: 1em;
  padding: 5px;
  color: red;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
}
</style>