<script setup>
import { ref } from "vue";
const props = defineProps(["data"]);
const quantity_itens = ref(0);
</script>

<template>
  <div class="card-cart-container">
    <img :src="props.data.link" alt="imagem" />
    <div class="cart-description-container">
      <h1>{{ props.data.title }}</h1>
      <input type="number" v-model="quantity_itens" />
    </div>
    <p>R${{ props.data.price }}</p>
  </div>
</template>


<style>
.card-cart-container {
  display: flex;
  width: 100%;
  height: 15.9rem;
  margin: 0 0 3rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 2.4rem;
  background-color: var(--color-lime);
}

.card-cart-container img {
  max-width: 200px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}

.card-cart-container p {
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 2rem;
  padding: 2.4rem;
}

.cart-description-container h1 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.6rem;
}

.cart-description-container input[type="number"] {
  height: 4rem;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  width: 10rem;
  padding: 0.5rem 1.7rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 20px;
  font-size: 1.6rem;
}
.cart-description-container {
  display: flex;
  width: 79%;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.4rem;
}
</style>