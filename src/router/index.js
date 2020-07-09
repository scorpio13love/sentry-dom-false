export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
  },
  {
    path: '/detail',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/detail.vue')
  },
]