import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import Router from 'vue-router'
import routes from '@/router'

Vue.config.productionTip = false
Vue.use(Router)

const sentryVue = new Integrations.Vue({
  Vue,
  attachProps: true
})

Sentry.init({
  // put on your own dsn 
  dsn: '',
  environment: process.env.NODE_ENV,
  integrations: [
    new Sentry.Integrations.Breadcrumbs({ dom: false}),
  ],
  sentryVue
});


const router = new Router({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
