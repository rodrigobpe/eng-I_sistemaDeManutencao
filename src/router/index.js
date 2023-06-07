import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Budget from '../pages/Budget.vue'
import Products from '../pages/Products.vue'
import Clients from '../pages/Clients.vue'
import Services from '../pages/Services.vue'

const routes =[
    {
        path:'/',
        component: Home,
    },
    {
        path:'/budget',
        component: Budget
    },
    {
        path:'/products',
        component: Products
    },
    {
        path:'/clients',
        component: Clients
    },
    {
        path:'/services',
        component: Services
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router