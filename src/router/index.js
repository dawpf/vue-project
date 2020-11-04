import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./modules/home";

Vue.use(VueRouter);

const routes = [
  ...Home,
  {
    path: "login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue"),
    meta: {
      title: "网页标题",
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/not-found/index.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

// 前置路由守卫--可用于登录页跳转
router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  document.title = to.meta.title || "默认网站标题";
  next();

  next();
});

export default router;
