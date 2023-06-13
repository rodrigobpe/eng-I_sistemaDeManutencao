<script setup>
import CartCards from "./CartCards.vue";

const {services} = defineProps(['services'])

</script>

<template >
  <section class="cart-section">
    <CartCards
      v-for="service in services"
      :key="service.id"
      :services="service"
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