<template>
  <nav class="nav-bar">
      <router-link to="/">
    <button class="btn btn-primary">
      Shopping
    </button>
      </router-link>

      <router-link to="/cart" class="shopping">
    <div class="btn btn-cart btn-primary">
        <div class="cart-icon"></div>
        <div>Checkout ({{ productsInCart }})</div>  
    </div>
      </router-link>
  </nav>
</template>
<style>
.nav-bar{
  text-align: right;
  width: 100%;
  height: 100px;
}

.cart {
  width: 300px;
  height: 60px;
  background-color: #405ed5;
  color: #FFF;
}

.btn{
  display: -webkit-inline-flex;
  margin: 10px;

}
.cart-icon {
  width: 24px;
  height: 24px;
  background: url(../assets/shopping_cart.svg) center no-repeat;
  background-size: cover;
}


</style>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['productsInCart']),
};
</script>
