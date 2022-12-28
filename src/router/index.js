import { createRouter, createWebHistory } from 'vue-router';
import Counter from '../components/Counter.vue';
import UserList from '../components/UserList.vue';
import Home from '../components/Home.vue';

const routes = [
  { path: '/counter', name: 'Counter', component: Counter },
  { path: '/users', name: 'UserList', component: UserList },
  { path: '/', name: 'Home', component: Home },
];

const router = createRouter({
  history: createWebHistory(process.env.baseUrl),
  routes,
});

export default router;
