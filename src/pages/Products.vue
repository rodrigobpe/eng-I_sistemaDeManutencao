<script setup>
import Titles from '../components/Titles.vue';
import CartSection from '../components/CartSection.vue';
const data = {
  justifyContent: '',
  qtdProducts: 3,
  description: 'Produtos'
}

</script>
<template>
  <Titles title="Carrinho" :data="data"/>
  <main class="main-products">
    <CartSection/>
    <p>KKKKKKKKKKKK</p>
  </main>
</template>


<style>
.main-products{
  display: flex;
  padding: 4rem 9rem 9rem;
}
</style>