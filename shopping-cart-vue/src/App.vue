<template>
  <div id="app" class="container">
    <nav-bar></nav-bar>
    <router-view class="component"></router-view>
     <footer>
      <p class="footer-info">Powered By <b-link href="//thadeucotts.com">Thadeu Cotts</b-link></p>
    </footer>
  </div>
</template>
<style>
.component {
  max-width: 1200px;
}
footer{
  position: fixed;
  width: 100%;
  height: 40px;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: rgb(67, 117, 140);
  color: #FFF;
}

.footer-info{
  line-height: 40px;
}
a, a:hover, a:active, a:visited {
  text-decoration: none;
  color: inherit;
}
</style>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar,
  },
  data() {
    return {};
  },
};
</script>
