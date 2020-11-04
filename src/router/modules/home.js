// home 模块路由

const NewsRoute = {
  // 注意：返回的格式是一个对象，不是一个数组！！
  path: "/",
  component: () => import("@/views/news/index.vue"),
  children: [
    {
      path: "",
      redirect: "user" // 进入home页面时，默认加载user页面
    },
    {
      path: "user",
      name: "User",
      component: () =>
        import(/* webpackChunkName: "user" */ "../../views/user/index.vue"),
      meta: {
        title: "网页标题",
        keepAlive: true // 需要被缓存
      }
    }
  ]
};

export default NewsRoute;
