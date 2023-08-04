import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout'),
    meta: { title: '首页' },
    children: [
      {
        path: '/xygk',
        name: 'collegeProfile',
        component: () => import('../views/college-profile/college-profile-index'),
        meta: { title: '学院概况' },
        children: [
          {
            path: '/xygk/xyjs',
            name: 'collegeIntroduce',
            component: () => import('../views/college-profile/introduction-page/college-introduce-index'),
            meta: { title: '学院介绍' }
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
