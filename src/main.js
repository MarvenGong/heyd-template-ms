import Vue from 'vue';
import App from './App.vue';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('vue2-animate/dist/vue2-animate.min.css');
import router from './router';
import store from './store';
import Config from './utils/Config';
import pluginGlobalMixins from './plugins/global-mixins';
// import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ElementUi from './element-ui';
import './theme.scss';
// http utils
import Http from './utils/HttpUtils';
import UserLogin from '@/utils/UserLogin';
import Tools from './utils/Tools';
// import { indicator, Toast } from '@/components';
import VueNetworkCheck from 'vue-network-check';
Vue.use(VueNetworkCheck);
Vue.prototype.$userLogin = UserLogin;
Vue.prototype.$config = Config;
window.Config = Config;
const httpIns = new Http();
Vue.prototype.$http = httpIns;
// indicator
// Vue.prototype.$indicator = Indicator;
// Vue.prototype.$toast = Toast;
Vue.prototype.$store = store;
Vue.prototype.$Tools = Tools;
Vue.use(ElementUi);
Vue.use(pluginGlobalMixins);
Vue.config.productionTip = false;
// 判断定位信息是否可用
let APPTemplate = '<App/>';
const initApp = async() => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: APPTemplate
  });
};
initApp();
