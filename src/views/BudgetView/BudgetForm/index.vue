<script setup>
import { reactive } from "vue";
import { useBudgetStore } from "../../../store/budgetStore";
const budgetStore = useBudgetStore();

const newBudget = reactive({
  id: "",
  name: "",
  description: "",
  client: "",
  deliveryDate: "",
  phone: "",
});

const handleNewBudget = () => {
  if (
    newBudget.id !== "" ||
    newBudget.id !== "" ||
    newBudget.description !== "" ||
    newBudget.client !== "" ||
    newBudget.phone !== "" ||
    newBudget.deliveryDate !== ""
  ) {
    budgetStore.addBudgets({
      id: parseInt(newBudget.id),
      name: newBudget.name,
      description: newBudget.description,
      client: newBudget.client,
      isFinish: false,
      phone: newBudget.phone,
      deliveryDate: newBudget.deliveryDate,
    });

    newBudget.id = "";
    newBudget.description = "";
    newBudget.client = "";
    newBudget.deliveryDate = "";
    newBudget.phone = "";
    newBudget.name = "";
  }
};
</script>

<template>
  <div class="budget-container">
    <form @submit.prevent="handleNewBudget">
      <label for="description">Descrição:</label>
      <input
        type="text"
        id="description"
        placeholder="Insira uma descrição"
        v-model="newBudget.description"
      />
      <label for="id">Numero de série:</label>
      <input
        type="number"
        id="id"
        placeholder="Insira um id"
        v-model="newBudget.id"
      />
      <label for="client">Nome cliente:</label>
      <input
        type="text"
        id="client"
        placeholder="Insira um cliente"
        v-model="newBudget.client"
      />
      <label for="name">Nome Produto:</label>
      <input
        type="text"
        id="name"
        placeholder="Insira o nome do produto"
        v-model="newBudget.name"
      />
      <label for="deliveryDate">Data de entrega:</label>
      <input
        type="date"
        id="deliveryDate"
        placeholder="Insira a data de entrega"
        v-model="newBudget.deliveryDate"
      />
      <label for="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        placeholder="(99) 99999-9999"
        v-model="newBudget.phone"
      />
      <button>Cadastrar Orçamento</button>
    </form>
  </div>
</template>


<style>
.budget-container {
  display: flex;
  width: 100%;
  height: 66rem;
  justify-content: center;
  align-items: center;
}

.budget-container form {
  padding: 4rem;
  border: 1px solid var(--color-light-gray);
  width: 500px;
  max-width: 500px;
  border-radius: 0.8rem;
  background-color: var(--color-lime);
  display: flex;
  flex-direction: column;
}

.budget-container input {
  height: 2rem;
  padding: 1rem;
  margin: 0 0 1.8rem 0;
  border: 1px solid var(--color-light-gray);
  border-radius: 20px;
  font-size: 1.6rem;
}
.budget-container label {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 130%;
  margin: 0 0 0.9rem;
}

.budget-container button {
  color: var(--color-positive);
  width: 100%;
  padding: 1.2rem 6rem;
  background-color: var(--color-green);
  border-radius: 0.8rem;
  border: none;
}
</style>