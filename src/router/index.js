// @ts-nocheck
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title:'Home Dashboard'}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
