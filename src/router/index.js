import Vue from 'vue'
import Router from 'vue-router'

// import Index from '@/components/index'
// import Home from '@/components/home'
// import Store from '@/components/store'
// import Person from '@/components/person'
// import storeDetail from '@/components/store/storeDetail'
// import productDetail from '@/components/store/productDetail'
// import Search from '@/components/store/search'
// import Assess from '@/components/store/assess'
// import Eorder from '@/components/order/eOrder'
// import Chat from '@/components/chat'
// import Complaint from '@/components/order/complaint'
// import Evaluation from '@/components/order/evaluation'
// import Lawyer from '@/components/person/lawyer'
// import Shop from '@/components/person/shop'
// import Certify from '@/components/person/certify'
// import Service from '@/components/person/service'
// import applyFirst from '@/components/person/applyFirst'
// import applySecond from '@/components/person/applySecond'
// import applyFinish from '@/components/person/applyFinish'
// import Client from '@/components/person/client'
// import Advisory from '@/components/person/advisory'
// import Order from '@/components/person/order'
// import Settings from '@/components/person/settings'
const Index = r => require.ensure([], () => r(require('@/components/index')), 'index')
const Home = r => require.ensure([], () => r(require('@/components/home')), 'home')
const Store = r => require.ensure([], () => r(require('@/components/store')), 'store')
const Person = r => require.ensure([], () => r(require('@/components/person')), 'person')
const storeDetail = r => require.ensure([], () => r(require('@/components/store/storeDetail')), 'storeDetail')
const productDetail = r => require.ensure([], () => r(require('@/components/store/productDetail')), 'productDetail')
const Search = r => require.ensure([], () => r(require('@/components/store/search')), 'search')
const Assess = r => require.ensure([], () => r(require('@/components/store/assess')), 'assess')
const Eorder = r => require.ensure([], () => r(require('@/components/order/eOrder')), 'eOrder')
const Chat = r => require.ensure([], () => r(require('@/components/chat')), 'chat')
const Complaint = r => require.ensure([], () => r(require('@/components/order/complaint')), 'complaint')
const Evaluation = r => require.ensure([], () => r(require('@/components/order/evaluation')), 'evaluation')
const Lawyer = r => require.ensure([], () => r(require('@/components/person/lawyer')), 'lawyer')
const Shop = r => require.ensure([], () => r(require('@/components/person/shop')), 'shop')
const Certify = r => require.ensure([], () => r(require('@/components/person/certify')), 'certify')
const Service = r => require.ensure([], () => r(require('@/components/person/service')), 'service')
const applyFirst = r => require.ensure([], () => r(require('@/components/person/applyFirst')), 'applyFirst')
const applySecond = r => require.ensure([], () => r(require('@/components/person/applySecond')), 'applySecond')
const applyFinish = r => require.ensure([], () => r(require('@/components/person/applyFinish')), 'applyFinish')
const Client = r => require.ensure([], () => r(require('@/components/person/client')), 'client')
const Advisory = r => require.ensure([], () => r(require('@/components/person/advisory')), 'advisory')
const Order = r => require.ensure([], () => r(require('@/components/person/order')), 'order')
const Settings = r => require.ensure([], () => r(require('@/components/person/settings')), 'settings')
const Collect = r => require.ensure([], () => r(require('@/components/person/collect')), 'collect')
const moreOrder = r => require.ensure([], () => r(require('@/components/person/moreOrder')), 'moreOrder')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: '/dasheng/',
  routes: [
    {
      path: '/',
      name: 'Index',
      meta:{index:1,title:"index"},
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      meta:{index:1,title:"index"},
      component: Home
    },
    {
      path: '/store',
      name: 'Store',
      meta:{index:2,title:"store"},
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
      meta:{index:3,title:"person"},
      component: Person
    },
    {
      path: '/storeDetail',
      name: 'storeDetail',
      meta:{index:6},
      component: storeDetail
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      meta:{index:7},
      component: productDetail
    },
    {
      path: '/search/:id',
      name: 'Search',
      meta:{index:4},
      component: Search
    },
    {
      path: '/assess',
      name: 'Assess',
      meta:{index:8},
      component: Assess
    },
    {
      path: '/eOrder',
      name: 'Eorder',
      meta:{index:8},
      component: Eorder
    },
    {
      path: '/chat',
      name: 'Chat',
      meta:{index:9},
      component: Chat
    },
    {
      path: '/complaint',
      name: 'Complaint',
      meta:{index:9},
      component: Complaint
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      meta:{index:9},
      component: Evaluation
    },
    {
      path: '/lawyer',
      name: 'Lawyer',
      meta:{index:5},
      component: Lawyer
    },
    {
      path: '/shop',
      name: 'Shop',
      meta:{index:9},
      component: Shop
    },
    {
      path: '/certify',
      name: 'Certify',
      meta:{index:6},
      component: Certify
    },
    {
      path: '/service',
      name: 'Service',
      meta:{index:9},
      component: Service
    },
    {
      path: '/applyFirst',
      name: 'applyFirst',
      meta:{index:6},
      component: applyFirst
    },
    {
      path: '/applySecond',
      name: 'applySecond',
      meta:{index:7},
      component: applySecond
    },
    {
      path: '/applyFinish',
      name: 'applyFinish',
      meta:{index:8},
      component: applyFinish
    },
    {
      path: '/client',
      name: 'Client',
      meta:{index:7},
      component: Client
    },
    {
      path: '/advisory',
      name: 'Advisory',
      meta:{index:8},
      component: Advisory
    },
    {
      path: '/order',
      name: 'Order',
      meta:{index:9},
      component: Order
    },
    {
      path: '/settings',
      name: 'Settings',
      meta:{index:4},
      component: Settings
    },
    {
      path: '/collect',
      name: 'Collect',
      meta:{index:8},
      component: Collect
    },
    {
      path: '/moreOrder',
      name: 'moreOrder',
      meta:{index:8},
      component: moreOrder
    },
    {
      path: '*',
      meta:{index:1},
      component: Index
    }
  ]
})
