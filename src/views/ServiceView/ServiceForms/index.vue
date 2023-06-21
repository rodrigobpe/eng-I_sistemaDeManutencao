<script setup>
import { reactive } from "vue";
import { useServiceStore } from "../../../store/serviceStore";
const serviceStore = useServiceStore();

const newService = reactive({
  id: "",
  title: "",
  price: "",
  quantity: "",
  desc: "",
  img: "",
  client: "",
  phone: "",
});

const handleNewService = () => {
  if (
    newService.client !== "" ||
    newService.desc !== "" ||
    newService.id !== "" ||
    newService.img !== "" ||
    newService.phone !== "" ||
    newService.price !== "" ||
    newService.quantity !== "" ||
    newService.title !== ""
  ) {
    serviceStore.addService({
      id: newService.id,
      title: newService.title,
      price: 250,
      quantity: 1,
      desc: newService.desc,
      client: newService.client,
      phone: newService.phone,
      img: newService.img,
    });

    newService.client = "";
    newService.desc = "";
    newService.id = "";
    newService.img = "";
    newService.phone = "";
    newService.quantity = "";
    newService.title = "";
  }
};
</script>

<template>
  <div class="service-container">
    <form @submit.prevent="handleNewService">
      <label for="title">Nome equipamento:</label>
      <input
        type="text"
        id="title"
        placeholder="Insira um nome"
        v-model="newService.title"
      />
      <label for="id">Número de série:</label>
      <input
        type="number"
        id="id"
        placeholder="Insira um id"
        v-model="newService.id"
      />
      <label for="client">Nome cliente:</label>
      <input
        type="text"
        id="client"
        placeholder="Insira um cliente"
        v-model="newService.client"
      />
      <label for="desc">Descrição equipamento:</label>
      <input
        type="text"
        id="desc"
        placeholder="Insira uma descrição"
        v-model="newService.desc"
      />
      <label for="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        placeholder="(99) 99999-9999"
        v-model="newService.phone"
      />
      <label for="img">Url da imagem:</label>
      <input
        type="text"
        id="img"
        placeholder="insira uma url"
        v-model="newService.img"
      />

      <button>Cadastrar Serviço</button>
    </form>
  </div>
</template>


<style>
.service-container {
  display: flex;
  width: 100%;
  height: 66rem;
  justify-content: center;
  align-items: center;
}

.service-container form {
  padding: 4rem;
  border: 1px solid var(--color-light-gray);
  width: 500px;
  max-width: 500px;
  border-radius: 0.8rem;
  background-color: var(--color-lime);
  display: flex;
  flex-direction: column;
}

.service-container input {
  height: 2rem;
  padding: 1rem;
  margin: 0 0 1.8rem 0;
  border: 1px solid var(--color-light-gray);
  border-radius: 20px;
  font-size: 1.6rem;
}
.service-container label {
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 130%;
  margin: 0 0 0.9rem;
}

.service-container button {
  color: var(--color-positive);
  width: 100%;
  padding: 1.2rem 6rem;
  background-color: var(--color-green);
  border-radius: 0.8rem;
  border: none;
}
</style>