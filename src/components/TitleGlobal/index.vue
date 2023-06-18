<script setup>
import { ref } from "vue";

const { title } = defineProps(["title"]);
const filter = ref("finish");
const newBudget = ref(false);
const emit = defineEmits(["filter",'newBudget']);
const titleItens = ["Todos", "Finalizado", "Em andamento"];

const handleFilter = (index) => {
  if (index === 0) emit("filter", (filter.value = "all"));
  if (index === 1) emit("filter", (filter.value = "finish"));
  if (index === 2) emit("filter", (filter.value = "in progress"));
};

const handleNewBudget = () =>{
  emit('newBudget',newBudget.value = !newBudget.value )
  console.log(newBudget.value)
}

</script>
<template>
  <div class="title-container">
    <h1>{{ title }}</h1>
    <ul>
      <span
       class="material-symbols-outlined add"
       @click="handleNewBudget"
       > add </span>
      <li
        v-for="(item, index) in titleItens"
        :key="index"
        @click="handleFilter(index)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
  <span class="border"></span>
</template>


<style>
.title-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.title-container ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-container ul li {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-negative);
  margin-right: 1rem;
  font-family: "Inter";
  padding: 0.5rem 2rem;
  border: 1px solid var(--color-gray);
  border-radius: 2rem;
  cursor: pointer;
}

.title-container h1 {
  margin-right: 2.3rem;
  letter-spacing: -0.02em;
  font-family: "Newsreader", serif;
}

.title-container p {
  font-family: "Inter";
  font-size: 2rem;
}

.border {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 9rem;
  margin: 3.3rem 0 4rem 0;
  height: 2px;
  background-color: var(--color-light-gray);
}

.title-active {
  background-color: var(--color-green);
}

.add {
  border-radius: 50%;
  background-color: var(--color-positive);
  padding: 0.5rem;
  border: 1px solid var(--color-gray);
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1.6rem;
  transition: all 0.2s ease-in-out;
}

.add:hover{
  background-color: #FF786D;
  color: var(--color-positive);
}
</style>