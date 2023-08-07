import { createRouter, createWebHashHistory } from 'vue-router'
// 主页模板
const Layout = () => import('@/views/Layout')
// 学院概况
const CollegeProfile = () => import('../views/college-profile/college-profile-index')
const CollegeIntroduce = () => import('../views/college-profile/collage/introduction-page/college-introduce-index')
const CollegeHistory = () => import('../views/college-profile/collage/history-page/history-page-index')
const CollegeLeaders = () => import('../views/college-profile/collage/leaders-page/leaders-page-index')
const CollegeLogo = () => import('../views/college-profile/collage/logo-page/logo-page-index')
const CollegeMaps = () => import('../views/college-profile/collage/maps-page/maps-pages-index')
// 组织机构
const Organization = () => import('../views/organization/organization-index')
// 教育教学
const Education = () => import('../views/education/education-index')
const EducationDynamicAcademic = () => import('../views/education/components/dynamicAcademic/dynamicAcademic')
const EducationReform = () => import('../views/education/components/educationReform/educationReform')
// 培训鉴定
const Training = () => import('../views/training/training-index')
const TrainingJob = () => import('../views/training/components/trainingJob/training-job-index')
const TrainingDynamicAppraisal = () => import('../views/training/components/dynamicAppraisal/dynamic-appraisal-index')
const TrainingDynamicJob = () => import('../views/training/components/dynamicAppraisal/components/dynamic-job-index')
const TrainingFileNotification = () => import('../views/training/components/dynamicAppraisal/components/file-notification-index')
const TrainingGradeAnnouncement = () => import('../views/training/components/dynamicAppraisal/components/grade-announcement-index')
const TrainingCertificatInformation = () => import('../views/training/components/dynamicAppraisal/components/certificate-information-index')
const TrainingStudentIdentification = () => import('../views/training/components/dynamicAppraisal/components/student-identification-index')

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta: { title: '首页' },
    children: [
      {
        path: '/xygk',
        name: 'CollegeProfile',
        component: CollegeProfile,
        meta: { title: '学院概况' },
        children: [
          { path: '/xygk/xyjs', name: 'CollegeIntroduce', component: CollegeIntroduce, meta: { title: '学院介绍' } },
          { path: '/xygk/xsyg', name: 'CollegeHistory', component: CollegeHistory, meta: { title: '校史沿革' } },
          { path: '/xygk/xrld', name: 'CollegeLeaders', component: CollegeLeaders, meta: { title: '现任领导' } },
          { path: '/xygk/xxbs', name: 'CollegeLogo', component: CollegeLogo, meta: { title: '学校标识' } },
          { path: '/xygk/xydt', name: 'CollegeMaps', component: CollegeMaps, meta: { title: '学院导图' } }
        ]
      },
      { path: '/zzjg', name: 'Organization', component: Organization, meta: { title: '组织机构' } },
      {
        path: '/jyjx',
        name: 'Education',
        component: Education,
        meta: { title: '教育教学' },
        redirect: '/jyjx/jwdt',
        children: [
          { path: '/jyjx/jwdt', name: 'EducationDynamicAcademic', component: EducationDynamicAcademic, meta: { title: '教务动态' } },
          { path: '/jyjx/jxgg', name: 'EducationReform', component: EducationReform, meta: { title: '教学改革' } }
        ]
      },
      {
        path: '/pxjd',
        name: 'Training',
        component: Training,
        meta: { title: '培训鉴定' },
        redirect: '/pxjd/pxgz1',
        children: [
          { path: '/pxjd/pxgz1', name: 'TrainingJob', component: TrainingJob, meta: { title: '培训工作' } },
          {
            path: '/pxjd/jddt',
            name: 'TrainingDynamicAppraisal',
            component: TrainingDynamicAppraisal,
            meta: { title: '鉴定动态' },
            redirect: '/pxjd/jddt/gzdt',
            children: [
              { path: '/pxjd/jddt/gzdt', name: 'TrainingDynamicJob', component: TrainingDynamicJob, meta: { title: '工作动态' } },
              { path: '/pxjd/jddt/wjtz', name: 'TrainingFileNotification', component: TrainingFileNotification, meta: { title: '文件通知' } },
              { path: '/pxjd/jddt/cjgg', name: 'TrainingGradeAnnouncement', component: TrainingGradeAnnouncement, meta: { title: '成绩公告' } },
              { path: '/pxjd/jddt/zsxx', name: 'TrainingCertificatInformation', component: TrainingCertificatInformation, meta: { title: '证书信息' } },
              { path: '/pxjd/jddt/xsjd', name: 'TrainingStudentIdentification', component: TrainingStudentIdentification, meta: { title: '学生鉴定' } }
            ]
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
