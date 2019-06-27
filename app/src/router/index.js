import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'LandingPage',
        component: () => import('@/components/LandingPage.vue')
        }
    ]
})


export default router;