import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import skills from '@/components/skills'
import announcements from '@/components/announcements'
import users from '@/components/users'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: announcements
    },
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ]
})



