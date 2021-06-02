import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Prims from '../components/Prims'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/algorithms',
      name: 'Prims',
      component: Prims
    }
  ]
})