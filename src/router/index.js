export default [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/home.vue')
  },
  {
    path: '/detail',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/detail.vue')
  },
]