<script setup>
import { useServiceStore } from "../../../store/serviceStore";
const store = useServiceStore();
</script>

<template>
  <section class="resume-section">
    <h1 class="resume-title">Resumo da compra</h1>
    <div class="resume-description">
      <p>Subtotal</p>
      <p>R${{ store.totalCount }}</p>
    </div>
    <div class="resume-description">
      <p>Frete</p>
      <p>GRÁTIS</p>
    </div>
    <div class="resume-description">
      <p class="resume-total">Total</p>
      <p class="resume-total">R${{ store.totalCount }}</p>
    </div>
    <button @click.prevent="teste">Realizar Pagamento</button>
  </section>
</template>


<style>
.resume-section {
  display: flex;
  flex-direction: column;
  width: 39.5rem;
  height: 28.8rem;
  padding: 2.4rem;
  background-color: var(--color-lime);
  border: 1px solid var(--color-light-gray);
  border-radius: 24px;
}

.resume-title {
  font-size: 2rem;
  margin-bottom: 3.2rem;
  font-weight: 600;
}

.resume-description {
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
}

.resume-total {
  font-weight: 600;
  margin: 5.2rem 0 3.2rem 0;
}

.resume-section button {
  height: 4.8rem;
  color: var(--color-positive);
  background-color: var(--color-green);
  border: none;
  font-size: 1.6rem;
  border-radius: 8px;
}
</style>