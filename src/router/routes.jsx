import { lazy } from 'react';

export default [
  {
    path: '/home',
    key: 'DEVELOPING_PAGE',
    isAuthPage: false,
    component: lazy(() => import(/* webpackChunkName: "pages" */ 'module/home'))
  },
  {
    path: '/test',
    key: 'TESt_PAGE',
    isAuthPage: false,
    component: lazy(() => import(/* webpackChunkName: "pages" */ 'module/test'))
  },
  {
    path: '/demo',
    key: 'TESt_PAGE',
    isAuthPage: false,
    component: lazy(() => import(/* webpackChunkName: "pages" */ 'module/demo'))
  },
]

export const FULLSCREEN_ROUTES = [
  {
    path: '/login',
    routerProps: {
      exact: true
    },
    key: 'LOGIN_PAGE',
    isAuthPage: false,
    component: lazy(() => import(/* webpackChunkName: "pages" */ 'page/login'))
  }
]