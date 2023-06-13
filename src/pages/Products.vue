<script setup>
import Titles from '../components/Titles.vue';
import utils from '../utils';
import CartSection from '../components/CartSection.vue';
import TotalPriceCart from '../components/TotalPriceCart.vue';

const data = {
  justifyContent: '',
  qtdProducts: utils.images.length,
  description: 'Produtos'
}


</script>
<template>
  <Titles title="Carrinho" :data="data"/>
  <main class="main-products">
    <CartSection/>
    <TotalPriceCart/>
  </main>
</template>


<style>
.main-products{
  display: flex;
  justify-content: space-between;
  padding: 4rem 9rem 9rem;
}
</style>