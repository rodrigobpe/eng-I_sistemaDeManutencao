import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Budget from '../pages/Budget.vue'
import Products from '../pages/Products.vue'
import Clients from '../pages/Clients.vue'
import Services from '../pages/Services.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/budget',
        name: 'Budget',
        component: Budget
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/clients',
        name: 'Clients',
        component: Clients
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router