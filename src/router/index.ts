import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ToDoList from '../views/ToDoList.vue';

const BASE_URL = import.meta.env.VUE_BASE_URL || '/';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/todo',
    name: 'todo',
    component: ToDoList
  }
];

const router = createRouter({
  history: createWebHistory(BASE_URL), routes
});


export default router;
