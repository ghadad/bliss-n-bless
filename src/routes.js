import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import Wizard from './views/Wizard.vue'
import Account from './views/Account.vue'
import History from './views/History.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/wizard', component: Wizard, meta: { title: 'Wizard' } },
  { path: '/account', component: Account, meta: { title: 'Account' } },
  { path: '/history', component: History, meta: { title: 'History' } },

  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
