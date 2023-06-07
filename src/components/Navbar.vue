<script setup>
import utils from '../utils'
const props = defineProps(["logo"]);
</script>
<template>
  <header class="nav-container">
    <span class="nav-logo">{{ props.logo }}</span>
    <ul class="nav-items">
        <li class="nav-item" v-for="link in utils.linkNavbar" :key="link"><a :href="link.path">{{ link.name }}</a></li>
        <li class="nav-item account">Conta</li>
    </ul>
  </header>
</template>

<style>
.nav-container {
  display: flex;
  padding: 0 9rem;
  align-items: center;
  justify-content: space-between;
  height: 11.2rem;
  background-color: var(--color-positive);
}

.nav-items {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item a{
  margin-right: 5rem;
  transition: all 0.3s ease-in-out;
  color: var(--color-negative);
  font-size: 1.6rem;
  line-height: 2.08rem;
  text-transform: capitalize;
}

.account {
  color: white;
  padding: 1rem 4rem;
  background-color: var(--color-green);
  border-radius: 8px;
}
.nav-item a:hover {
  color: var(--color-green);
}

.nav-logo {
  color: var(--color-green);
  font-size: 3.2rem;
  font-family: "Newsreader", serif;
  font-weight: 500;
}
</style>