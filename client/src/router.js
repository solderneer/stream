import Vue from 'vue'
import Router from 'vue-router'

import Join from './views/Join.vue'
import File from './views/File.vue'
import Watch from './views/Watch.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'join',
      component: Join,
    },
    {
      path: '/files',
      name: 'file',
      component: File,
    },
    {
      path: '/watch/:state',
      name: 'watch',
      component: Watch,
    }
  ]
})
