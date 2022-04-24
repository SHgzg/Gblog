import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'
import NoteView from '../views/NoteView.vue'
import PlanView from '../views/PlanView.vue'
import CaseView from '../views/CaseView.vue'
import ShareView from '../views/ShareView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/main',
    name: 'main',  
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/note',
    name: 'note',  
    component: () => import('../views/NoteView.vue')
  },
  {
    path: '/share',
    name: 'share',  
    component: ShareView
  },
  {
    path: '/plan',
    name: 'plan',  
    component: () => import('../views/PlanView.vue')
  },
  {
    path: '/case',
    name: 'case',  
    component: () => import('../views/CaseView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
