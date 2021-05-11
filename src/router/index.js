import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: '首页',
        component: () => import(/* webpackChunkName: "home" */ '@/components/layout.vue'),
        children:[
          {
            path:'',
            name:'首页',
            component:() => import('@/views/home.vue')
          },
          {
            path:'/triangle',
            name:'三角形问题',
            component:() => import('@/views/triangle.vue')
          },
          {
            path:'/computer',
            name:'电脑销售问题',
            component:() => import('@/views/ComputerSell.vue')
          },
          {
          path:'/hello',
          name:'hello',
          component:() => import('@/components/HelloWorld.vue')
          }
        ] ,
        meta: {
          index: 1
        }
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/components/login.vue'),
        meta: {
          index: 1
        }
      },
      {
        path: '/hello',
        name: 'HelloWorld',
        component: () => import(/* webpackChunkName: "hello" */ '@/components/HelloWorld.vue'),
        meta: {
          index: 1
        }
      },
    ]
  })
  
  export default router