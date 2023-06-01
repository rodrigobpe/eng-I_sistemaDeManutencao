<script setup>
const links = ['Home','About', "Equipamentos"]
const props = defineProps(['logo'])
</script>
<template>
    <header class="nav-container">
        <span class="nav-logo">{{ props.logo }}</span>
        <ul class="nav-items">
            <li class="nav-item" v-for="link in links" :key="link">{{ link }}</li>
        </ul>
    </header>
</template>

<style>
.nav-container{
    display: flex;
    padding: 0 5rem;
    align-items: center;
    justify-content: space-between;
    height: 10rem;
    background-color: var(--color-negative);
}

.nav-items{
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--color-positive);
    cursor: pointer;
}

.nav-item{
    margin-right: 2rem;
    transition: all 0.3s ease-in-out;
}

.nav-item:hover{
    color: var(--color-aquamarine);
}

.nav-logo{
    color: var(--color-aquamarine);
    font-weight: 900;
    font-size: 3.2rem;
}
</style>