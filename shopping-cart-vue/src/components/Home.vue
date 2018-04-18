<template>
<div class="container">
  <product :key="product.id" :product="product" v-for="product in products" ></product>
</div>
</template>
<style>
.container {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-flow: row wrap;
}

</style>

<script>
import { mapGetters } from 'vuex';
import Product from './Product.vue';


export default {
  computed: mapGetters({
    products: 'allProducts',
  }),
  components: {
    Product,
  },
};
</script>
