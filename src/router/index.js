/* eslint-disable max-len */
import Vue from 'vue';
import Router from 'vue-router';
import myStore from '../store';
import NProgress from 'nprogress';
import { notNeedH5LoginRouteName } from './router-config';
import UserLogin from '../utils/UserLogin';
Vue.use(Router);
const PageNotFound = resolve => require(['@p/errors/the-404'], resolve);

/**
 * 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 */
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: require('@p/errors/route-loading').default,
    // 加载失败时使用的组件
    error: require('@p/errors/net-error').default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 10000
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}
const theHome = () => lazyLoadView(import('@p/the-home'));
const Login = () => lazyLoadView(import('@p/the-login'));

const Home = () => lazyLoadView(import('@p/the-home/home'));

const myRouter = new Router({
  routes: [
    { path: '*', name: 'pageNotFound', component: PageNotFound },
    { path: '', name: 'login', component: Login },
    { path: '/home', component: theHome,
      children: [
        { path: '', name: 'home', meta: { title: '首页' }, component: Home }
      ]
    }
  ],
  scrollBehavior() {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 };
  }
});
myRouter.beforeEach((to, from, next) => {
  // 如果访问的页面需要登录则进行登录判断
  // const historyRouteNames = myStore.state.historyRouteNames;
  // if (from.name && to.name !== historyRouteNames[historyRouteNames.length - 1]) {
  //   myStore.dispatch('addRouteHistory', from.name);
  // };
  NProgress.start();
  if (notNeedH5LoginRouteName.indexOf(to.name) < 0) {
    if (UserLogin.isLogin()) {
      next();
    } else {
      next({
        'name': 'login',
        query: {
          redirect_url: to.path
        }
      });
    }
  } else {
    next();
  }
  let allowBack = true;    //    给个默认值true
  if (to.meta.allowBack !== undefined) {
    allowBack = to.meta.allowBack;
  }
  if (!allowBack) {
    history.pushState(null, null, location.href);
  }
  myStore.state.allowBack = allowBack;
});
myRouter.afterEach(() => {
  NProgress.done();
  // document.title = to.meta.title || 'haiermoney H5';
});
export default myRouter;
