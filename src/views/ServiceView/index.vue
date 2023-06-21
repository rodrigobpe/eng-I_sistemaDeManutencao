<script setup>
import TitleService from "./TitleService/index.vue";
import ServiceDescription from "./ServiceDescription/index.vue";
import TotalService from "./TotalService/index.vue";
import ServiceForms from "./ServiceForms/index.vue";


import { useServiceStore } from "../../store/serviceStore";
import { ref } from "vue";

const isNewService = ref(false)
const toggleNewService = (newService) => (isNewService.value = newService)

const store = useServiceStore();
store.getTasks()

</script>
<template>
  <main>
    <TitleService @newService="toggleNewService" />
    <section class="section-services">
      <ServiceDescription v-if="!isNewService"/>
      <TotalService v-if="!isNewService"/>
      <ServiceForms v-if="isNewService"/>
    </section>
  </main>
</template>

<style>
.section-services{
  display: flex;
  justify-content: space-between;
}
</style>