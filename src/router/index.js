import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    roles: ['admin', 'editor']   will control the page roles (you can set multiple roles)
    noCache: true                if true, the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard'),
      name: 'dashboard',
      meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/clue',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/clue/index'), name: 'clue', meta: { title: 'clue', icon: 'clue' }}
    ]
  },
  {
    path: '/customer',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/customer'), name: 'customer', meta: { title: 'customer', icon: 'customer' }}
    ]
  },
  {
    path: '/seas',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/seas'), name: 'seas', meta: { title: 'seas', icon: 'seas' }}
    ]
  },
  {
    path: '/business',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/business'), name: 'business', meta: { title: 'business', icon: 'business' }}
    ]
  },
  {
    path: '/product',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/product'), name: 'product', meta: { title: 'product', icon: 'product' }}
    ]
  },
  {
    path: '/contract',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/contract'), name: 'contract', meta: { title: 'contract', icon: 'contract' }}
    ]
  },
  {
    path: '/contact',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/contact'), name: 'contact', meta: { title: 'contact', icon: 'contact' }}
    ]
  },
  {
    path: '/receivable',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/receivable'), name: 'receivable', meta: { title: 'receivable', icon: 'receivable' }}
    ]
  },
  {
    path: '/contractlist',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/contractlist'), name: 'contractlist', meta: { title: 'contractlist', icon: 'contractlist' }}
    ]
  },
  {
    path: '/report',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/report'), name: 'report', meta: { title: 'report', icon: 'report' }}
    ]
  },
  {
    path: '/follow',
    component: Layout,
    children: [
      { path: 'index', component: () => import('@/views/follow'), name: 'follow', meta: { title: 'follow', icon: 'follow' }}
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
