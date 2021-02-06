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
                <div class="input-img-holder">
                  <input placeholder="Product image URL" v-model="img" />
                  <img class="preview-img" v-if="img != ''" :src="img" />
                </div>
                <button @click="AddArticle">Add</button>
            </article>
        </div>

        <div class="block">
            <h3>Product list</h3>
            
            <div class="page-holder"
              v-if="paginatedArticles.length > 0">
              <ol class="page"
                v-for="(page, pageIndex) in paginatedArticles" :key="pageIndex">
                <li class="list-item"
                  v-for="(article, articleIndex) in page" :key="articleIndex">
                    <span class="product-index">{{ article.index + 1}} -</span>
                    <span class="product-name">{{ article.product_name }}</span>
                    <span class="remove" @click="removeArticle(article)">X</span>
                </li>
              </ol>
            </div>

            <p v-else>{{ serviceNotAvailable }}</p>                
                
        </div>             
    </section>

    <div class="container">
      <h3>Or use sample product images..</h3>
      
      <div class="sample-images">
        <img @click="useSample($event)" class="sample-img" src="https://pics.freeicons.io/uploads/icons/png/4135828861606066369-512.png" />
        <img @click="useSample($event)" class="sample-img" src="https://pics.freeicons.io/uploads/icons/png/14779852331549345956-512.png" />
        <img @click="useSample($event)" class="sample-img" src="https://pics.freeicons.io/uploads/icons/png/9762501761553237335-512.png" />
        <img @click="useSample($event)" class="sample-img" src="https://pics.freeicons.io/uploads/icons/png/14658539231553237336-512.png" />
        <img @click="useSample($event)" class="sample-img" src="https://pics.freeicons.io/uploads/icons/png/17895813201553237359-512.png" />
      </div>
    </div>
  </div>
</template>

<script>
import {serviceNotAvailable} from '@/mixins/errorMessage.js';

export default {
  layout(context) {
    return "admin";
  },
  mixins: [serviceNotAvailable],
  data() {
    return {
        articles: {},
        paginatedArticles: [],
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
      console.error(error);
    }
  },
  async fetch() {
    try {
      this.articles = await fetch('/api/GetArticles').then(res => res.json());
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    paginateArticles() {
      let articles = this.articles;
      let pages = [];
      let pageIndex = 0;
      let pagination = 10;
      let amountOfPages = Math.ceil(articles.length / pagination);

      // for each page
      for (let i = 0; i < amountOfPages; i++) {
        let page = [];

        // push each article
        for (let pi = 0; pi < pagination; pi++) {
          let firstArticle = articles.shift();
          if (firstArticle != undefined) {            
            firstArticle = {
              index: pageIndex,
              ...firstArticle
            }
            page.push(firstArticle);

            // for each article we push - we keep track of the iteration
            pageIndex++;
          }
        }
        pages.push(page);
      }


      this.paginatedArticles = pages;
      return this.paginatedArticles;
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
      useSample(e) {
        this.img = e.target.currentSrc;
      },
      async removeArticle(article) {
        var self = this;
        try {
          await this.$http.$delete(`/api/DeleteArticle/${article.id}`).finally(function () {
            // fetch updated article list
            self.$fetch();
          });
        } catch (error) {
          console.error(error);
        }
    }
  }
}
</script>

<style scoped>
section {
    display: flex;
}

.container {
  margin: 25px 0;
}

.sample-images {
  padding: 25px 0;
}

input, textarea {
    display: block;
    margin: 5px 0;
    padding: 5px;
    width: 80%;
    min-width: 200px;
}

textarea {
  min-height: 150px;
}

.block {
    border: solid 1px #ccc;
    padding: 25px;
    min-width: 500px;
}

.list-item {
  position: relative;
  list-style: none;
  padding: 10px 30px 10px 10px;
}

.list-item:hover {
  text-decoration: underline;
}

.remove {
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 1em;
  padding: 5px;
  color: red;
  font-weight: bold;
  margin: 0 5px;
  cursor: pointer;
}

.page-holder {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.page {
  width: 50%;
  padding: 10px;
}

.sample-img {
  max-width: 50px;
  max-height: 50px;
  cursor: pointer;
  margin: 0 25px;
}

.input-img-holder {
  display: flex;
  flex-flow: row no-wrap;
}

.preview-img {
  max-width: 40px;
  max-height: 40px;
  margin-left: 10px;
}
</style>