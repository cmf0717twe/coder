import Vue from 'vue'
import VueRouter from 'vue-router'
import Publicity from '../views/Publicity.vue'

Vue.use(VueRouter)//调用VueRouter

const routes = [//配置路由和组件之间的映射关系
  {
    path: '/',
    name: 'Publicity',
    component: Publicity
  },
  {
    path: '/homepage',
    name: 'homepage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/homepage.vue')
  }
]

const router = new VueRouter({//创建路由对象
  routes,
	mode:'history',//将浏览器从默认的hash模式(路径含#)变为html5的history模式(路径不含#)
	linkActiveClass:'router-link-active'//可以修改路由匹配成功自动给router-link设置的router-link-active的class属性
})

export default router//导出router对象
