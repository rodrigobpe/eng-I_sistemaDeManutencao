import { defineStore } from 'pinia'
import api from '../services'
import { computed, ref } from 'vue'

export const useServiceStore = defineStore('service', () => {
    // state
    const services = ref([])

    //getters
    const totalCount = computed(() => services.value.map(t => (t.price * t.quantity)).reduce((t, c) => (t + c), 0))

    //actions
    const getTasks = async () => {
        const res = await api.get('/services')
        const data = res.data
        services.value = data
    }

    return {
        getTasks, totalCount, services
    }
})
