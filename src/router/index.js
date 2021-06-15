// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/Home.vue'

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
