// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import Home from 'µ/Home.vue'
import Login from 'µ/Login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title:'Home Dashboard'}
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing,
        meta: { title: 'Pricing' }
    },
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
} )

export default router
