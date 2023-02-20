import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/content/home/index.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/content/search.vue')
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: () => import('../views/content/shopping.vue')
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/content/mine.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 使用
// 挂载 - main.js

export default router