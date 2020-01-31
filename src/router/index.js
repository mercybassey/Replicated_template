import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import dashboard from "@/views/dashboard";
import icons from "@/views/icons";
import map from "@/views/map";
import notifications from "@/views/notifications";
import user from "@/views/user";
import tables from "@/views/tables";
import typography from "@/views/typography";
import rtl from "@/views/rtl";
import upgrade from "@/views/upgrade"

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: dashboard,
    name: 'dashboard'
  },
  {
    path:'/icons',
    component: icons,
    name:'icons'
  },
  {
    path: '/map',
    component: map,
    name:'map'
  },
  {
    path: '/notifications',
    component: notifications,
    name: 'notifications'
  },
  {
    path: '/user',
    component: user,
    name:'user'
  },
  {
    path: '/tables',
    component: tables,
    name:'tables'
  },
  {
    path: '/typography',
    component: typography,
    name:'typography'
  },
  {
    path: '/rtl',
    component:rtl,
    name:'rtl',
  },
  {
    path:'/upgrade',
    component: upgrade,
    name:'upgrade'
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
