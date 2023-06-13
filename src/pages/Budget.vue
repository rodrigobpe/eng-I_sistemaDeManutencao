<script setup>
import Titles from '../components/Titles.vue';
import BudgetSection from '../components/BudgetSection.vue';
import api from '../services';
import { onMounted, ref } from 'vue';

const budgets = ref([])
const data = {
  justifyContent: 'space-between',
  itens: ['Filtrar','Finalizados','Em Andamento']
}

const fetchBudget = async()=>{
  const res = await api.get('/budgets')
  budgets.value = res.data
}

onMounted(fetchBudget)
</script>
<template>
  <Titles title="Orçamento" :data="data"/>
  <main class="main-budget">
    <BudgetSection :budgets="budgets"/>
  </main>
</template>


<style>
.main-budget{
  padding: 4rem 9rem 9rem;
}
</style>