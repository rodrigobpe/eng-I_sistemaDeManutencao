<script setup>
import Titles from "../components/Titles.vue";
import CartSection from "../components/CartSection.vue";
import TotalPriceCart from "../components/TotalPriceCart.vue";
import api from "../services";
import { onMounted, ref } from "vue";

const services = ref([])
const qtdProducts = ref(0)
const totalPrice = ref(0);

const data = {
  justifyContent: "",
  qtdProducts: qtdProducts,
  description: "Produtos",
};

const fetchServices = async() =>{
  const res = await api.get('/services');
  services.value = res.data
  qtdProducts.value = services.value.length
  totalPrice.value = services.value.map((a)=> {return a.qtd*a.price}).reduce((total,cur)=> {return total+cur})
}

onMounted(fetchServices)

</script>
<template>
  <Titles title="Carrinho" :data="data" />
  <main class="main-products">
    <CartSection :services="services"/>
    <TotalPriceCart :totalPrice="totalPrice"/>
  </main>
</template>


<style>
.main-products {
  display: flex;
  justify-content: space-between;
  padding: 4rem 9rem 9rem;
}
</style>

