<script setup>
const props = defineProps(['title','data'])
</script>
<template>
    <div :style="{justifyContent: props.data.justifyContent}" class="title-container">
        <h1>{{ props.title }}</h1>
        <p>{{ props.data.qtdProducts }} {{ props.data.description }}</p> 
    </div>
    <span class="border"></span>

</template>


<style>
.title-container{
    display: flex;
    align-items: last baseline;
    margin-bottom: 2.9rem;
    height: 14.9rem;
    font-family: 'Newsreader';
    padding: 0 9rem;
}

.title-container h1{
    margin-right: 2.3rem;
    letter-spacing: -0.02em;

}

.title-container p{
    font-family: 'Inter';
    font-size: 2rem;
}

.border{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 9rem;
    height: 2px;
    background-color: var(--color-light-gray);
}
</style>