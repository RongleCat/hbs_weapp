import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
const host = "http://192.168.3.5/project/xxgy/WxApi"
  // const host = "https://api.fmcat.top/api"
  //添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: "加载中",
    mask: true
  });
  // console.log(request);
  // request.headers["X-Tag"] = "flyio";
  // request.headers['content-type']= 'application/json';
  request.headers = {
    "X-Tag": "flyio",
    'content-type': 'application/x-www-form-urlencoded'
  };

  let authParams = {
    appid: 'wxe3864e1b143fb58c',
    token: 'dev_test'
  }

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === "") {
      delete request.body[val]
    };
  });
  request.body = {
    ...request.body,
    ...authParams
  }
  return request;
});

//添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading();
    if (response.data.code === -1) {
      wx.showToast({
        title: response.data.msg,
        icon: 'none',
        duration: 2000
      })
      return false
    } else {
      return response.data.data
    }
  },
  (err) => {
    //请求出错，根据返回状态码判断出错原因
    console.log(err);
    wx.hideLoading();
    if (err) {
      wx.showToast({
        title: '请求失败，请稍后再试',
        icon: 'none',
        duration: 2000
      })
      return '请求失败，请稍后再试'
    };
  }
);

fly.config.baseURL = host;

export default fly;