import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CounterView from "../views/CounterView.vue";
import HomeView from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;