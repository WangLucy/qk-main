import { createRouter, createWebHistory } from 'vue-router';
const appRoutes = [
  {path: '/',redirect:'/home'},
  // {
  //   path: '/main-login',
  //   component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
  //   hidden: true
  // },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index'),    
    hidden: true
  },
  {
    path: '/apps',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index'),    
    hidden: true
  }
 ]
const router = createRouter({
  history: createWebHistory(),
  routes: appRoutes
})

export default router
