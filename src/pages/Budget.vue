<script setup>
import Titles from '../components/Titles.vue';
import BudgetSection from '../components/BudgetSection.vue';
const data = {
  justifyContent: 'space-between',
  itens: ['Filtrar','Finalizados','Em Andamento']
}
</script>
<template>
  <Titles title="Orçamento" :data="data"/>
  <main class="main-budget">
    <BudgetSection/>
  </main>
</template>


<style>
.main-budget{
  padding: 4rem 9rem 9rem;
}
</style>