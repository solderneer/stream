import Vue from 'vue'
import Router from 'vue-router'

import Join from './views/Join.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'join',
      component: Join,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    }
  ]
})
