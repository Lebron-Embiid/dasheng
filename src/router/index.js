import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import Store from '@/components/store'
import Person from '@/components/person'
import storeDetail from '@/components/store/storeDetail'
import productDetail from '@/components/store/productDetail'
import Search from '@/components/store/search'
import Assess from '@/components/store/assess'
import Eorder from '@/components/order/eOrder'
import Chat from '@/components/chat'
import Complaint from '@/components/order/complaint'
import Evaluation from '@/components/order/evaluation'
import Lawyer from '@/components/person/lawyer'
import Shop from '@/components/person/shop'
import Certify from '@/components/person/certify'
import Service from '@/components/person/service'
import applyFirst from '@/components/person/applyFirst'
import applySecond from '@/components/person/applySecond'
import applyFinish from '@/components/person/applyFinish'
import Client from '@/components/person/client'
import Advisory from '@/components/person/advisory'
import Order from '@/components/person/order'
import Settings from '@/components/person/settings'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: '/dasheng/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/store',
      name: 'Store',
      component: Store,
      // children: [
      //   // 当 /user/:id 匹配成功，
      //   // UserHome 会被渲染在 User 的 <router-view> 中
      //   { path: 'storeDetail', name: 'storeDetail', component: storeDetail }
      // ]
    },
    {
      path: '/person',
      name: 'Person',
      component: Person
    },
    {
      path: '/storeDetail',
      name: 'storeDetail',
      component: storeDetail
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: productDetail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/assess',
      name: 'Assess',
      component: Assess
    },
    {
      path: '/eOrder',
      name: 'Eorder',
      component: Eorder
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/complaint',
      name: 'Complaint',
      component: Complaint
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/lawyer',
      name: 'Lawyer',
      component: Lawyer
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/certify',
      name: 'Certify',
      component: Certify
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/applyFirst',
      name: 'applyFirst',
      component: applyFirst
    },
    {
      path: '/applySecond',
      name: 'applySecond',
      component: applySecond
    },
    {
      path: '/applyFinish',
      name: 'applyFinish',
      component: applyFinish
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/advisory',
      name: 'Advisory',
      component: Advisory
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
