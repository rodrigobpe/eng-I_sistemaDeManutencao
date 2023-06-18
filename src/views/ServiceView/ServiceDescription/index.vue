<script setup>
import { useServiceStore } from "../../../store/serviceStore";
const store = useServiceStore();
</script>
<template>
  <div class="service-desc">
    <div
      v-for="service in store.services"
      class="service-card"
      :key="service.id"
    >
      <img :src="service.img" alt="imagem" />
      <div class="service-card-desc">
        <h1>{{ service.title }}</h1>
        <input v-model="service.quantity" type="number" min="0" />
      </div>
      <p>{{ `R$${service.price * service.quantity}` }}</p>
    </div>
  </div>
</template>

<style>
.service-desc {
  display: flex;
  width: 60%;
  flex-direction: column;
}
.service-card {
  display: flex;
  width: 100%;
  height: 15.9rem;
  margin: 0 0 3rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 2.4rem;
  background-color: var(--color-lime);
}

.service-card img {
  max-width: 200px;
  width: 200px;
  height: 100%;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}

.service-card p {
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 2rem;
  padding: 2.4rem;
}

.service-card-desc h1 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2.6rem;
}

.service-card-desc input[type="number"] {
  height: 4rem;
  width: 10rem;
  padding: 0.5rem 1.7rem;
  border: 1px solid var(--color-light-gray);
  border-radius: 20px;
  font-size: 1.6rem;
}
.service-card-desc {
  display: flex;
  width: 79%;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.4rem;
}
</style>