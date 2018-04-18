<template>
    <b-card  class="card"
      :title="product.title" >
    <b-img class="card-image" :src="product.imageName" fluid />
      <p class="card-text">{{product.name}}</p>
      <span class="card-text price">R$ {{product.price.toFixed(2)}}</span>
      <b-button @click='addToCart(product)' variant="primary" class="btn">
        Comprar
      </b-button>
    </b-card>
</template>
<style scoped>
.card {
  height: 350px;
  width: 350px;
  margin: 10px;
  padding: 4px;
  text-align: center;
  margin-bottom: 100px;
}

.card:hover {
  transform: scale(1.01);
}

.card-title{
  text-align: left;
}
.card-image{
  margin: auto;

}

.btn {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.price {
  position: absolute;
  left:20px;
  bottom: 20px;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['product'],
  methods: mapActions(['addToCart']),

};
</script>
