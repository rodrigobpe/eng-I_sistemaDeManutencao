<script setup>
import TitleGlobal from "../../components/TitleGlobal/index.vue";
import BudgetDescription from "./BudgetDescription/index.vue";
import BudgetForm from "./BudgetForm/index.vue";

import { useBudgetStore } from "../../store/budgetStore";
import { ref } from "vue";
const store = useBudgetStore();

const newBudget = ref(false);
const filter = ref("all");
const handleFilter = (status) => (filter.value = status);

const toggleNewBudget = (isNewBudget) => (newBudget.value = isNewBudget);

store.getBudgets();
</script>
<template>
  <main>
    <TitleGlobal
      :title="!newBudget ? 'Orçamento' : 'Cadastro Orçamento'"
      @filter="handleFilter"
      @newBudget="toggleNewBudget"
    />
    <section class="budget-section" v-if="filter === 'finish' && !newBudget">
      <BudgetDescription
        v-for="budget in store.finish"
        :key="budget.id"
        :budget="budget"
      />
    </section>
    <section
      class="budget-section"
      v-if="filter === 'in progress' && !newBudget"
    >
      <BudgetDescription
        v-for="budget in store.inProgress"
        :key="budget.id"
        :budget="budget"
      />
    </section>
    <section class="budget-section" v-if="filter === 'all' && !newBudget">
      <BudgetDescription
        v-for="budget in store.budgets"
        :key="budget.id"
        :budget="budget"
      />
    </section>
    <section class="budget-section" v-if="newBudget">
      <BudgetForm />
    </section>
  </main>
</template>

<style>
.budget-section {
  display: flex;
  flex-direction: column;
}
</style>