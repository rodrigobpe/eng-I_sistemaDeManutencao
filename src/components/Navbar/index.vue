<script setup>
import linksHeader from "../../utils/linksHeader";
</script>
<template>
  <header>
    <span class="header-logo">iFix</span>
    <ul class="header-itens">
      <li v-for="(link, index) in linksHeader" :key="index">
        <a
          class="header-link"
          :class="[index === 2 ? 'active' : 0]"
          :href="link.path"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </header>
</template>


<style>
header {
  display: flex;
  height: 11.2rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.6rem;
}

header .header-logo {
  font-family: "Newsreader", serif;
  font-weight: 500;
  font-size: 3.2rem;
  letter-spacing: -0.01em;
  color: var(--color-green);
}

header .header-itens {
  display: flex;
}

header .header-link {
  color: var(--color-negative);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 130%;
  margin: 0 0 0 4rem;
}

header .active{
    color: var(--color-positive);
    background-color: var(--color-green);
    border-radius: 0.8rem;
    padding: 1.35rem 4rem;

}
</style>