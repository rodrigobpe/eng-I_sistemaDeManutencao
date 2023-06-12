<script setup>
const props = defineProps(['data']);
</script>

<template>
    <div class="budget-card-container">
        <div class="budget-card-desc">
            <h1>{{ props.data.title }}</h1>
            <h1>Descrição: {{ props.data.description }}</h1>
            <p>Cliente: {{ props.data.client }}</p>
        </div>
        <span>Ver Detalhes</span>
    </div>
</template>


<style>
.budget-card-container{
    display: flex;
    height: 17rem;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    margin: 0 0 3rem;
    background-color: var(--color-lime);
    border: 2px solid var(--color-light-gray);
    border-radius: 24px;
}

.budget-card-desc{
    display: flex;
    width: 85%;
    margin:0 0 0 2.4rem ;
    flex-direction: column;
}

.budget-card-desc h1{
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
    font-weight: 600;
}

.budget-card-desc p{
    margin: 1rem 0 0 0;
    font-size: 1.6rem;
}

.budget-card-container span{
    cursor: pointer;
    font-size: 1.6rem;
    margin: 0 5.4rem 0 0;
}
</style>