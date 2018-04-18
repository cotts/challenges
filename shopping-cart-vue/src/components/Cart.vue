<template>
  <b-jumbotron bg-variant="white" lead="Carrinho de Compras" class="checkout">
    <div class="checkout-empty" v-show="!products.length">
       <b-alert show variant="warning">Seu Carrinho está vazio!</b-alert>
    </div>
    <div class="checkout-items" v-show="products.length">
      <div class="checkout-list">
        <b-table striped hover :items="products" :fields="fields">
        </b-table>
      </div>
      <div class="prices">
        <b-alert show variant="light" class="checkout-price">Total dos itens: R${{ total }}</b-alert>
        <b-alert show variant="light" class="checkout-ship" v-show="shipPrice">{{ shipText }}</b-alert>
        <b-alert show variant="info" class="checkout-final" v-show="shipPrice">Total + Frete: R${{ fullPrice.toFixed(2) }}</b-alert>
      </div>
      <div class="checkout-ship">
        <b-row class="ship-input">
          <b-col lg="6">
        <b-input-group prepend="CEP" >
          <b-form-input v-model="cep"></b-form-input>
        </b-input-group>
          </b-col>
        </b-row>
        <b-row class="ship-button">
          <b-col lg="12">
            <b-btn variant="outline-success" @click='shipCalc(ship, cep)'>Calcular Frete</b-btn>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-jumbotron>
</template>
<style>
.checkout {
  margin: 0 auto;
  text-align: center;
  width: 90%;
}
.prices{
  text-align: right ;
}
.checkout-ship{
  right: 0;
  position: relative;
}
.ship-input{
  position: relative;
  right: 0;
}
.ship-button{
  position: relative;
  right:0;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      fields: [
        { key: 'name', label: 'Item' },
        {
          key: 'price',
          label: 'Preço',
          formatter: value => {
            return `R$ ${value.toFixed(2)}`;
          }
        },
        { key: 'quantity', label: 'Quantidade' }
      ],
      cep: '',
      shipPrice: '',
      shipText: '',
    };
  },
  computed: { 
    ...mapGetters({
    products: 'cartProducts',
    ship: 'shipValues',
    }),
    //calcular the total price of items in cart
    total(){
      return this.products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2)
    },
    //returns the price with the shipping value and clean the cep object
    fullPrice(){
      const full = parseFloat(this.total) + parseFloat(this.shipPrice);
      this.shipText = `Frete: R$${this.shipPrice}` 
      this.cep = '';
      return full;
      },
  },
  methods: {
    //calculate the shipping price based on the CEP typed and the shipping table
    shipCalc: function(table, cep) {
      fetch(`//viacep.com.br/ws/${cep}/json/`)
        .then(data => data.json())
        .then(data => table.find(p => data.uf === p.UF))
        .then(data => ((data !== undefined) ? this.shipPrice = data.valor.toFixed(2) : this.shipText = 'CEP não encontrado'));
    },
  },
};
</script>
