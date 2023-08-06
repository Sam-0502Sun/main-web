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
      },
      {
        path: '/zzjg',
        name: 'organization',
        component: () => import('../views/organization/organization-index'),
        meta: { title: '组织机构' }
      },
      {
        path: '/jyjx',
        name: 'education',
        component: () => import('../views/education/education-index'),
        meta: { title: '教育教学' },
        redirect: '/jyjx/jwdt',
        children: [
          {
            path: '/jyjx/jwdt',
            name: 'dynamicAcademic',
            component: () => import('../views/education/components/dynamicAcademic/dynamicAcademic'),
            meta: { title: '教务动态' }
          },
          {
            path: '/jyjx/jxgg',
            name: 'educationReform',
            component: () => import('../views/education/components/educationReform/educationReform'),
            meta: { title: '教学改革' }
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
