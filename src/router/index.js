import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function(Guard){
  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: '*',
        component: () => import('../layout/404.vue')
      },
      {
        path: '/login',
        name: 'Login',
        beforeEnter: Guard.guest,
        component: () => import('../layout/Login.vue')
      },
      {
        path: '/',
        name: 'Dashboard.index',
        beforeEnter: Guard.auth,
        component: () => import('../layout/Default.vue'),
        children: [
          {
            path: 'settings',
            component: () => import('../views/Settings.vue')    
          },
          {
            path: '',
            redirect: "/report"
          },
          {
            path: 'report',
            name: 'Dashboard.index',
            component: () => import('../views/Dashboard.vue')   ,
            children: [
              {
                path: '',
                name: 'name',
                component: () => import('../components/data/Kabupaten.vue')    
              },
              {
                path: 'outlet',
                component: () => import('../components/data/Outlet.vue')    
              }  
            ] 
          }
        ]
      }
    ]
  })
}