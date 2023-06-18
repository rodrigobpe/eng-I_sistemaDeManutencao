<script setup>
import TitleService from "./TitleService/index.vue";
import ServiceDescription from "./ServiceDescription/index.vue";
import TotalService from "./TotalService/index.vue";

import { useServiceStore } from "../../store/serviceStore";

const store = useServiceStore();
store.getTasks()

</script>
<template>
  <main>
    <TitleService />
    <section class="section-services">
      <ServiceDescription />
      <TotalService/>
    </section>
  </main>
</template>

<style>
.section-services{
  display: flex;
  justify-content: space-between;
}
</style>