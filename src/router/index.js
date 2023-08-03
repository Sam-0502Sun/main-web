import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home-index')
      },
      {
        path: '/xygk',
        name: 'collegeProfile',
        component: () => import('../views/college-profile/college-profile-index'),
        children: [
          {
            path: '/xygk/xyjs',
            name: 'collegeIntroduce',
            component: () => import('../views/college-profile/components/college-introduce-index')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
