import { defineStore } from 'pinia'
import api from '../services'
import { computed, ref } from 'vue'

export const useBudgetStore = defineStore('budget', () => {
    // state
    const budgets = ref([])

    //getters
    const finish = computed(() => budgets.value.filter(b => b.isFinish))
    const inProgress = computed(() => budgets.value.filter(b => !b.isFinish))


    //actions
    const getBudgets = async () => {
        const res = await api.get('/budgets')
        const data = res.data
        budgets.value = data
    }

    const addBudgets = async (budget) =>{
        await api.post('/budgets', budget)
        budgets.value.push(budget)
    }

    return {
        budgets, getBudgets,finish,inProgress,addBudgets
    }
})
