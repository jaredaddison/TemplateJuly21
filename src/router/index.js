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
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { title: 'Login' }
    },
]

const router = createRouter( {
    history: createWebHistory(),
    routes,
} )

export default router
