<script setup>
import { ref } from "vue"

const props = defineProps(['title','data'])
</script>
<template>
    <div :style="{justifyContent: props.data.justifyContent}" class="title-container">
        <h1>{{ props.title }}</h1>
        <p :v-if="props.data.qtdProducts">{{ props.data.qtdProducts }} {{ props.data.description }}</p>
        <ul :v-if="props.data.itens">
            <li  v-for="item in props.data.itens" :key="item">{{ item }}</li>
        </ul>  
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

.title-container ul{
    display: flex;
}
.title-container ul li{
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-negative);
    margin-right:1rem ;
    font-family: 'Inter';
    padding: 1rem 2rem;
    border: 1px solid var(--color-gray);
    border-radius: 2rem;
    cursor: pointer;
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

.title-active{
    background-color: var(--color-green);
}
</style>