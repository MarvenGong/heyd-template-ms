/**
 * Created by marven on 2017/09/23.
 */
import Vue from 'vue';
import axios from 'axios';
import Config from './Config';
import UserLogin from './UserLogin';
import MyRouter from '@/router';
import { Toast } from '@/components';
import httpMockUrlList from './mockList';
import myStore from '../store';
// 处理Raw纯json字符串得请求
axios.defaults.baseURL = '';// Config.HTTPBASEURL;
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
Vue.prototype.$ajax = axios;
const ocrWhiteUrl = ['/loanRecord/list', '/loanRecord/detail', '/loanRecord/billPlan'];
class Http {
  TOKEN_KEY = 'X-LEOPARD-TOKEN'
  commonHeaders = {
    'X-SERVICE': 'nirvana-boss', // 请求类型，B端请求还是C端请求，boss商户渠道均为B端
    'X-CLIENT-TYPE': 'B', // 请求类型，B端请求还是C端请求，boss商户渠道均为B端
    'X-ORG-NO': 1, // 组织机构ID，目前暂时写1
    'X-CLIENT': 'WEB' // 客户端类型
  }
  getCurrUrlMockStatus(relUrl) {
    return Config.HTTPMOCK_ON && httpMockUrlList.indexOf(relUrl) >= 0;
  }
  getBaseUrlByRelativeUrl(relUrl) {
    return this.getCurrUrlMockStatus(relUrl) ? Config.MOCK_URL : Config.HTTPBASEURL;
  }
  /**
  * 发起ajax请求
  * @param _url
  * @param method 请求方式
  * @param _data
  * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
  */
  request(_url, _data = {}, method, isNeedLogin = true, showErrorInfo = true) {
    // 如果mock开启并且当前url在需要拦截的数组中则走mock地址否则走配置的地址
    let httpBaseUrl = this.getBaseUrlByRelativeUrl(_url);
    if (Config.XHRLOG) {
      /* eslint-disable */
      console.info(`----来自${_url}的POST请求----`);
      console.info(JSON.stringify(_data));
      /* eslint-disable */
    }
    let _headers = {};
    // 判断是否需要登录并且是否mock
    if (isNeedLogin && !this.getCurrUrlMockStatus(_url)) {
      _headers = {
        [this.TOKEN_KEY]: '' + UserLogin.getLoginToken()
      };
    }
    _headers.uuId = 'h5';
    let ajaxDataKey = method === 'POST' ? 'data' : 'params';
    let ajaxOptions = {
      url: httpBaseUrl + _url,
      dataType: 'json',
      [ajaxDataKey]: _data,
      headers: {
        ..._headers,
        ...this.commonHeaders
      },
      method: method,
    };
    return axios(ajaxOptions).then(res => {
      let code = res.data.code.substr(res.data.code.length - 4); // 截取code的后四位 // 9016
      if (code === '9016' || res.data.code === '401') {
        Toast({ message: '请先登录!' });
        myStore.dispatch('removeCreditStatus');
        UserLogin.removeLoginInfo();
        MyRouter.replace({
          name: 'loginhome',
          query: {
            redirect_url: location.hash.substr(1)
          }
        });
        res.success = false;
        return res;
      } else if (code === '9019') { // 需要实名认证
        const urlInWhite = ocrWhiteUrl.some(item => {
          return item.indexOf(res.config.url) >= 0;
        });
        if (urlInWhite) {
          res.success = false;
          return res;
        } else {
          MyRouter.replace({
            name: 'applyIndex',
            query: {
              url: location.hash.substr(1),
              h5token: UserLogin.getLoginToken()
            }
          });
        }
      } else if (code === '0000') {
        let data = res.data;
        data.success = true;
        return data;
      } else {
        showErrorInfo && Toast({ message: res.data.desc });
        res.success = false;
        return res;
      }
    }).catch(err => {
      showErrorInfo && Toast({ message: err });
      return {
        success: false,
        message: err
      }
    });
  }
  /**
   * 发起post请求
   * @param _url
   * @param _data
   * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
   * @param showErrorInfo 是否需要展示默认的错误信息
   */
  post(_url, _data, isNeedLogin = true, showErrorInfo = true) {
    return this.request(_url, _data, 'POST', isNeedLogin, showErrorInfo);
  }
  /**
   * 发起get请求
   * @param _url
   * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
   * @param showErrorInfo 是否需要展示默认的错误信息
   */
  get(_url, _params = {}, isNeedLogin = true, showErrorInfo = true) {
    return this.request(_url, _params, 'GET', isNeedLogin, showErrorInfo);
  }
  /**
   * 发起delete请求
   * @param _url
   * @param isNeedLogin 是否需要登录token默认为需要，不需要传递false即可
   * @param showErrorInfo 是否需要展示默认的错误信息
   */
  delete(_url, _params = {}, isNeedLogin = true, showErrorInfo = true) {
    return this.request(_url, _params, 'DELETE', isNeedLogin, showErrorInfo);
  }
}
export default Http;
