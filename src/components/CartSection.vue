<script setup>
import CartCards from "./CartCards.vue";
</script>

<template>
  <section class="cart-section">
    <CartCards/>
    <CartCards/>
    <CartCards/>
  </section>
</template>

<style>
.cart-section{
    display: flex;
    max-width: 50%;
    flex-direction: column;}
</style>