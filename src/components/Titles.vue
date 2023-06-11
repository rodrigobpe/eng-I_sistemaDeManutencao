<script setup>
const props = defineProps(['title','justifyContent'])
</script>
<template>
    <div :style="{justifyContent: props.justifyContent}" class="title-container">
        <h1>{{ props.title }}</h1> 
    </div>
</template>


<style>
.title-container{
    display: flex;
    align-items: center;
    height: 14.9rem;
    padding: 0 9rem;
}
</style>