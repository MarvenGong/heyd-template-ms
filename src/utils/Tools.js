// import { Toast } from '@/components';
export default {
  /**
   * 补齐小数
   * @param num 需要限制的数值
   * @param limit 限制位数
   */
  floatLimit(num, limit) {
    // 有小数
    if ((num + '').indexOf('.') !== -1) {
      let FloatOperationNum = (num + '').split('.')[1].length;
      if (FloatOperationNum < limit) {
        // 有小数不满限制位数位  添零补齐
        for (var i = 0, j = limit - FloatOperationNum; i < j; i++) {
          num = num + '0';
        }
      } else {
        // num = num.toFixed(limit) + '';
        num = `${num}`.substring(0, `${num}`.lastIndexOf('.') + 3);
      }
    } else {
      // 无小数不满小数位数  补齐
      let str = '.';
      for (var z = 0, k = limit; z < k; z++) {
        str = str + '0';
      }
      num = num + str;
    }
    return num;
  },
  /**
   * 生成一个唯一标识字符串
   * @returns {string}
   */
  generateUUID() {
    let d = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  },
  /**
   * 根据出生日期算出年龄
   * @param strBirthday
   * @returns {*}
   */
  getAgeFromBirthday(strBirthday) {
    if (!strBirthday || strBirthday === '') {
      return '';
    }
    let returnAge;
    let strBirthdayArr = strBirthday.split('-');
    let birthYear = strBirthdayArr[0] / 1;
    let birthMonth = strBirthdayArr[1] / 1;
    let birthDay = strBirthdayArr[2] / 1;
    let d = new Date();
    let nowYear = d.getFullYear();
    let nowMonth = d.getMonth() + 1;
    let nowDay = d.getDate();
    if (nowYear === birthYear) {
      returnAge = 0;// 同年 则为0岁
    } else {
      let ageDiff = nowYear - birthYear; // 年之差
      if (ageDiff >= 0) {
        if (nowMonth === birthMonth) {
          let dayDiff = nowDay - birthDay; // 日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        } else {
          let monthDiff = nowMonth - birthMonth; // 月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        }
      } else {
        returnAge = -1; // 返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge; // 返回周岁年龄
  },
  /**
   * 获取文件后缀名
   * @param fileUrl
   * @returns {string}
   */
  getFileSuffix(fileUrl) {
    if (fileUrl) {
      return fileUrl.substring(fileUrl.lastIndexOf('.') + 1);
    } else {
      return '';
    }
  },
  /**
   * 根据文件名判断文件是不是图片
   * @param fileUrl
   * @returns {boolean}
   */
  isImg(fileUrl) {
    let suffix = this.getFileSuffix(fileUrl);
    return suffix === 'png' || suffix === 'jpg' || suffix === 'gif' || suffix === 'jpeg' || suffix === 'bmp' || suffix === 'pic';
  },
  /**
   * 打开新窗口
   * @param url
   */
  openWin(url) {
    // let url = 'Add.aspx'; // 转向网页的地址;
    let name = '颂车贷BOSS'; // 网页名称，可为空;
    let iWidth = 1280; // 弹出窗口的宽度;
    let iHeight = 768; // 弹出窗口的高度;
    // 获得窗口的垂直位置
    let iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    // 获得窗口的水平位置
    let iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    window.open(url, name,
      'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',' +
      'status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
    // window.open("AddScfj.aspx", "newWindows", 'height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
  },
  requestFullScreen(element) {
    // 判断各种浏览器，找到正确的方法
    let requestMethod = element.requestFullScreen || // W3C
      element.webkitRequestFullScreen || // Chrome等
      element.mozRequestFullScreen || // FireFox
      element.msRequestFullScreen; // IE11
    if (requestMethod) {
      requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
      let wscript = new ActiveXObject('WScript.Shell');
      if (wscript !== null) {
        wscript.SendKeys('{F11}');
      }
    }
  },
  // 退出全屏 判断浏览器种类
  exitFull() {
    // 判断各种浏览器，找到正确的方法
    let exitMethod = document.exitFullscreen || // W3C
      document.mozCancelFullScreen || // Chrome等
      document.webkitExitFullscreen || // FireFox
      document.webkitExitFullscreen; // IE11
    if (exitMethod) {
      exitMethod.call(document);
    } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
      let wscript = new ActiveXObject('WScript.Shell');
      if (wscript !== null) {
        wscript.SendKeys('{F11}');
      }
    }
  },
  /**
   * 数字相加，包括浮点数相加，不会丢失精度
   * @param num1
   * @param num2
   * @returns {number}
   */
  addNum(num1, num2) {
    let sq1;
    let sq2;
    let m;
    try {
      sq1 = num1.toString().split('.')[1].length;
    } catch (e) {
      sq1 = 0;
    }
    try {
      sq2 = num2.toString().split('.')[1].length;
    } catch (e) {
      sq2 = 0;
    }
    m = Math.pow(10, Math.max(sq1, sq2));
    return (num1 * m + num2 * m) / m;
  },
  /* eslint-disable */
  geoErrorCallback(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
      console.info('您拒绝对获取地理位置的请求');
      break;
    case error.POSITION_UNAVAILABLE:
      console.info('位置信息是不可用的');
      break;
    case error.TIMEOUT:
      console.info('请求您的地理位置超时');
      break;
    case error.UNKNOWN_ERROR:
      console.info('未知错误');
      break;
    }
  },
  getToday() {
    var date = new Date();
    var seperator1 = '-';
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  extend(deep, target, options) {
    var copyIsArray;
    var toString = Object.prototype.toString;
    var hasOwn = Object.prototype.hasOwnProperty;

    var class2type = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Object]': 'object'
    };

    var type = function (obj) {
        return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
    };
    var isWindow = function (obj) {
        return obj && typeof obj === "object" && "setInterval" in obj;
    };
    var isArray = Array.isArray || function (obj) {
            return type(obj) === "array";
        };
    var isPlainObject = function (obj) {
        if (!obj || type(obj) !== "object" || obj.nodeType || isWindow(obj)) {
            return false;
        }

        if (obj.constructor && !hasOwn.call(obj, "constructor")
            && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
            return false;
        }

        var key;
        for (key in obj) {
        }

        return key === undefined || hasOwn.call(obj, key);
    };
    for (var name in options) {
        var src = target[name];
        var copy = options[name];

        if (target === copy) {
            continue;
        }

        if (deep && copy
            && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
                copyIsArray = false;
                var clone = src && isArray(src) ? src : [];

            } else {
                var clone = src && isPlainObject(src) ? src : {};
            }

            target[name] = this.extend(deep, clone, copy);
        } else if (copy !== undefined) {
            target[name] = copy;
        }
    }

    return target;
  }
};
