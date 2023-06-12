<script setup>
import BudgetCards from './BudgetCards.vue';
import utils from "../utils";
</script>

<template>
  <section class="budget-container">
    <BudgetCards v-for="data in utils.orçamentos" :key="data" :data="data"/>
  </section>
</template>


<style>
.budget-container {
  display: flex;
  flex-direction: column;
}
</style>