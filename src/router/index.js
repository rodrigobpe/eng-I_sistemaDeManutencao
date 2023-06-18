import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView/index.vue'
import BudgetView from '../views/BudgetView/index.vue'
import ServiceView from '../views/ServiceView/index.vue'
import ProductView from '../views/ProductView/index.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component: HomeView
    },
    {
        path:'/budgets',
        name:'budgets',
        component: BudgetView
    },
    {
        path:'/services',
        name:'services',
        component: ServiceView
    },
    {
        path:'/products',
        name:'products',
        component: ProductView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router