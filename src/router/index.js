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
            component: () => import('../views/college-profile/collage/introduction-page/college-introduce-index'),
            meta: { title: '学院介绍' }
          },
          {
            path: '/xygk/xsyg',
            name: 'collegeHistory',
            component: () => import('../views/college-profile/collage/history-page/history-page-index'),
            meta: { title: '校史沿革' }
          },
          {
            path: '/xygk/xrld',
            name: 'collegeLeaders',
            component: () => import('../views/college-profile/collage/leaders-page/leaders-page-index'),
            meta: { title: '现任领导' }
          },
          {
            path: '/xygk/xxbs',
            name: 'collegeLogo',
            component: () => import('../views/college-profile/collage/logo-page/logo-page-index'),
            meta: { title: '学校标识' }
          },
          {
            path: '/xygk/xydt',
            name: 'collegeMaps',
            component: () => import('../views/college-profile/collage/maps-page/maps-pages-index'),
            meta: { title: '学院导图' }
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
