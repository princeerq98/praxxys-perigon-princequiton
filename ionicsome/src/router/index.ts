import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import {auth} from '../main';

const guard = (to:RouteLocationNormalized, from: RouteLocationNormalized, next:NavigationGuardNext) => {
    try {
      if (auth.currentUser){
        next()
      } else {
        next("/");
      }
    } catch (error) {
      next("/");
    }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/SplashScreen.vue')
  },
  {
    path: '/auth',
    component: () => import('@/views/Authentication.vue')
  },
  {
    path: '/splash',
    component: () => import('@/views/SplashScreen.vue')
  },
  {
    path: '/learn',
    component: () => import('@/views/SimpleModal.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
        // beforeEnter: guard
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4Page.vue'),
        beforeEnter: guard
      },
      {
        path: 'tab5',
        component: () => import('@/views/Tab5Page.vue'),
        beforeEnter: guard
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
