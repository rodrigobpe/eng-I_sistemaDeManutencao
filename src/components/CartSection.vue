<script setup>
import utils from "../utils";
import CartCards from "./CartCards.vue";

</script>

<template >
  <section class="cart-section">
    <CartCards
      v-for="data in utils.images"
      :key="data"
      :data="data"
    />
  </section>
</template>

<style>
.cart-section {
  display: flex;
  width: 60%;
  flex-direction: column;
}
</style>