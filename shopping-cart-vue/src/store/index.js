import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
/**
 * States of the application
 * Contains the object with the items, the cart objects and the shipping price table
 */
const state = {
  added: [],
  all: [
    {
      id: '1768411',
      title: 'Tabled AOC',
      name: 'Tablet AOC Breeze MW0711BR com Tela de 7", 8GB, Wi-Fi, Leitor de Cartão, Capa Protetora e Android 4.0',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6624363',
      price: 499.00,
    },
    {
      id: '1768491',
      title: 'Tabled DL',
      name: 'Tablet DL Everest EV-T71 PRE com Tela 7”, 4GB, Câmera 2MP, Wi-Fi, Suporte à Modem 3G e Android 4.0',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829307',
      price: 499.00,
    },
    {
      id: '1706504',
      title: 'Tablet Smart DL',
      name: 'Tablet Smart DL HD7 com 4GB, Wi-Fi, Tela 7", Câmera 2MP, Cabo USB, Slot para Cartão e Android 4.0 - Chumbo',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6506376',
      price: 399.00,
    },
    {
      id: '1826580',
      title: 'Tablet Phraser Kinno',
      name: 'Tablet Phaser Kinno PC709 VE Plus com Tela 7” Multitouch, 4GB, Wi-Fi, Suporte à Modem 3G e Android 2.3',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6875461',
      price: 379.00,
    },
    {
      id: '1765938',
      title: 'Tablet Multilaser',
      name: 'Tablet Multilaser Vibe NB027 com Tela 7" com 8GB, Slot para Cartão, Wi-Fi e Android 4.0 – Rosa',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6584703',
      price: 399.00,
    },
    {
      id: '1776985',
      title: 'Tablet Smart DL',
      name: 'Tablet Smart DL A75 com 4GB, Wi-Fi, Tela 7", Câmera 2MP, Touch Screen, Adaptador USB, Slot para Cartão e Android 2.3 - Preto',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538',
      price: 399.00,
    },
    {
      id: '1768488',
      title: 'Tablet DL Mobile',
      name: 'Tablet DL Mobile  TG-M71 com Tela 7", 3G, Wi-Fi, Câmera 2MP, Saída Mini HDMI, Bluetooth, Suporte à Modem 3G e Android 4.0 – Branco',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
      price: 749.00,
    },
    {
      id: '1767783',
      title: 'Tablet Phaser Kinno',
      name: 'Tablet Phaser Kinno PC-719VE com Tela 7”, Wi-Fi, Suporte à Modem 3G e Android 2.2',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399',
      price: 329.00,
    },
    {
      id: '1680698',
      title: 'Tablet AOC Breeze',
      name: 'Tablet AOC Breeze 2 MW0821BR8 com 8GB, Wi-Fi, Bluetooth, Leitor de Cartão, Mini HDMI, Câmera 3MP, Tela 8" e Android 2.3',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117',
      price: 599.00,
    },
    {
      id: '470442',
      title: 'Tablet DL Smart',
      name: 'Tablet DL Smart T-704 com 4GB, Câmera 2.0MP, Wi-Fi, Tela 7" e Android 2.2',
      imageName: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178',
      price: 349.00,
    },
  ],
  shipPrice: [
    { UF: 'AC', valor: 24.50 },
    { UF: 'AL', valor: 60.48 },
    { UF: 'AM', valor: 83.16 },
    { UF: 'AP', valor: 51.96 },
    { UF: 'BA', valor: 44.22 },
    { UF: 'CE', valor: 27.59 },
    { UF: 'DF', valor: 60.3 },
    { UF: 'ES', valor: 65.74 },
    { UF: 'GO', valor: 63.6 },
    { UF: 'MA', valor: 51.99 },
    { UF: 'MG', valor: 45.79 },
    { UF: 'MS', valor: 70.88 },
    { UF: 'MT', valor: 49.93 },
    { UF: 'PA', valor: 15.78 },
    { UF: 'PB', valor: 7.74 },
    { UF: 'PE', valor: 42.76 },
    { UF: 'PI', valor: 45.61 },
    { UF: 'PR', valor: 16.37 },
    { UF: 'RJ', valor: 81.58 },
    { UF: 'RN', valor: 22.52 },
    { UF: 'RO', valor: 91.56 },
    { UF: 'RR', valor: 62.54 },
    { UF: 'RS', valor: 6.79 },
    { UF: 'SC', valor: 86.9 },
    { UF: 'SE', valor: 83.4 },
    { UF: 'SP', valor: 50.97 },
    { UF: 'TO', valor: 27.21 }],
};

/**
 * getters that will get information to the application
 */
const getters = {
  // get all products in state 
  allProducts: () => state.all,
  //return the quantity of items in cart
  productsInCart: () => state.added.reduce((accum, item) => accum + item.quantity, 0),
  //list the products in cart with name, price and quantity
  cartProducts: () => state.added.map(item => ({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  })),
  //returns the shipping price table
  shipValues: () => state.shipPrice,
};

/**
 * mutations = work as method to manage the application based on types included.
 */
const mutations = {
/** 
 * check if product are included inside cart, 
 * if true, include quantity + 1, 
 * else include one product with the properties described
 */
  [types.ADD_TO_CART](product, { id, name, price }) {
    const record = state.added.find(p => p.id === id);
    if (!record) {
      state.added.push({
        id,
        name,
        price,
        quantity: 1,
      });
    } else {
      record.quantity += 1;
    }
  },

};

// actions that will be used by mutations
const actions = {
  /**
   * 
   * 
   * @param {Object} { commit } mutation callback that will be used to ADD_TO_CART
   * @param {Object} product that will be included
   */
  addToCart({ commit }, product) {
    commit(types.ADD_TO_CART, {
      id: product.id,
      name: product.title,
      price: product.price,
    });
  },
};

export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations,
});
