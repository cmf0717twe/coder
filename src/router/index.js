import Vue from 'vue'
import VueRouter from 'vue-router'
import Publicity from '../views/Publicity.vue'

Vue.use(VueRouter)//调用VueRouter

const routes = [//配置路由和组件之间的映射关系
  {
    path: '/',
    meta: {
      title: "大型冬活《坍缩点》"
    },
    component: Publicity,
    beforeEnter: (to, from, next) => {//Vue-router的路由独享守卫
      console.log("这是路由独享守卫");
      next();//前置守卫不能忘next()
    }
  },
  {
    path: '/homepage',
    meta: {
      title: "少女前线"
    },
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/homePage/first.vue')
      }
    ]
  }
]

const router = new VueRouter({//创建路由对象
  routes,
  mode: 'history',//将浏览器从默认的hash模式(路径含#)变为html5的history模式(路径不含#)
  linkActiveClass: 'router-link-active'//可以修改路由匹配成功自动给router-link设置的router-link-active的class属性
})

//Vue-router的全局导航守卫,借这个方法来修改SPA应用的title
//如果想要使用路由独享守卫可以在路由中使用beforeEnter(如14行代码)
//如果想要使用组件内的守卫可以在组件中使用beforeRouteEnter/beforeRouteUpdate/beforeRouteLeave(见Publicity.vue)
router.beforeEach((to, from, next) => {//前置(before)守卫(guard):router调用之前,所以必须要调用next()
  //从from跳转到to
  document.title = to.matched[0].meta.title
  console.log("Vue-router的前置守卫");
  next()//next()函数一定要调，不然router会无法进行下一步
})

router.afterEach((to, from) => {//后置(after)钩子(hook):不需要调用next()
  console.log("Vue-router的后置钩子");
})

export default router//导出router对象
