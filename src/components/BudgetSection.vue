<script setup>
import BudgetCards from './BudgetCards.vue';

const {budgets} = defineProps(['budgets'])
</script>

<template>
  <section class="budget-container">
    <BudgetCards v-for="budget in budgets" :key="budget.id" :data="budget"/>
  </section>
</template>


<style>
.budget-container {
  display: flex;
  flex-direction: column;
}
</style>