import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import News from '@/components/News'
import User from '@/components/User'
import Top from '@/components/Top'
import Entertainment from '@/components/Entertainment'
import finance from '@/components/finance'
import tech from '@/components/tech'
import shop from '@/components/shop'
import history from '@/components/history'
import life from '@/components/life'
import more from '@/components/more'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'

    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/home/top'
        },
        {
          path: '/home/top',
          component: Top
        },
        {
          path: '/home/entertainment',
          component: Entertainment
        },
        {
          path: '/home/finance',
          component: finance
        },
        {
          path: '/home/tech',
          component: tech
        },
        {
          path: '/home/shop',
          component: shop
        },
        {
          path: '/home/history',
          component: history
        },
        {
          path: '/home/life',
          component: life
        },
        {
          path: '/home/more',
          component: more
        }
      ]
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/news/detail/:id',
      component: detail
    }
  ]
})
