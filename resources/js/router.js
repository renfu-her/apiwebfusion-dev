import { createRouter, createWebHistory } from 'vue-router';
import UserIndex from './components/UserIndex.vue';
import MenuIndex from './components/MenuIndex.vue';

const routes = [
    { path: '/users', component: UserIndex },
    { path: '/menus', component: MenuIndex },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
