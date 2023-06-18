<script setup>
import { useServiceStore } from "../../../store/serviceStore";

const store = useServiceStore();
</script>
<template>
  <div class="title-service">
    <h1>Carrinho</h1>
    <p>
      {{ store.services.length }}
      {{ store.services.length === 1 ? "produto" : "produtos" }}
    </p>
  </div>
  <span class="border"></span>
</template>

<style >
.title-service {
  display: flex;
  align-items: baseline;
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

.border{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 9rem;
    margin: 3.3rem 0 4rem 0;
    height: 2px;
    background-color: var(--color-light-gray);
}
</style>