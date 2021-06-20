// @ts-nocheck
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createRouter, createWebHistory } from 'vue-router'
const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
