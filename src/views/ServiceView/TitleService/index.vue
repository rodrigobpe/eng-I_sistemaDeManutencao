<script setup>
import { ref } from "vue";
import { useServiceStore } from "../../../store/serviceStore";
const emit = defineEmits(['newService']);

const newService = ref(false);
const handleNewService = () => {
  emit("newService", (newService.value = !newService.value));
  console.log(newService.value);
};
const store = useServiceStore();

</script>
<template>
  <div class="title-service">
    <div class="cart">
      <h1>{{ !newService ? 'Carrinho' : 'Cadastro de Serviço'  }}</h1>
      <p v-if="!newService">
        {{ store.services.length }}
        {{ store.services.length === 1 ? "produto" : "produtos" }}
      </p>
    </div>
    <span class="material-symbols-outlined add" @click="handleNewService">
      add
    </span>
  </div>
  <span class="border"></span>
</template>

<style >
.title-service {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.cart {
  display: flex;
  align-items: baseline;
}

.title-service span {
  display: flex;
  justify-content: flex-end;
}

.title-service h1 {
  font-family: "Newsreader", serif;
  margin-right: 2.3rem;
}

.title-service p {
  font-weight: 300;
  font-size: 2rem;
  line-height: 130%;
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
</style>