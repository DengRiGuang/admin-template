/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-22 10:44:27
 * @lastTime: 2021-03-09 16:02:31
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\router\index.ts
 * @Description: 
 */
import { createRouter, createWebHashHistory, RouterView } from 'vue-router';
import { UserLayout, BasicLayout } from '@/layout';
import NotFound from '@/views/exception/404.vue';
export const asyncRouter = [
  {
    path: '/',
    name: 'work',
    component: () => import('@/views/index/index.vue'),
    meta: { icon: 'AntDesignOutlined' },
  },
  {
    path: '/settings',
    name: 'settings',
    component: RouterView,
    meta: { icon: 'AntDesignOutlined' },
    children: [
      {
        path: '/settings/index',
        name: 'setting',
        component: () => import('@/views/settings/index.vue'),
        meta: { icon: 'AntDesignOutlined' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    hidden: true,
    component: NotFound
  }
]
const constantRouter = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    children: asyncRouter
  },
  { 
    path: '/user', 
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouter,
});

export default router;