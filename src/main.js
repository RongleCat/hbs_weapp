import Vue from 'vue'
import App from './App'
import fly from './utils/fly'

Vue.config.productionTip = false
Vue.prototype.$fly = fly;
App.mpType = 'app'

Vue.mixin({
  methods: {
    rTo(url) {
      wx.redirectTo({
        url: `/pages${url}/main`
      })
    },
    sTo(url) {
      wx.switchTab({
        url: `/pages${url}/main`
      })
    },
    nTo(url, param) {
      let allUrl = `/pages${url}/main`
      console.log(allUrl);
      if (param) {
        let tmps = [];
        for (let key in param) {
          tmps.push(key + '=' + param[key]);
        }
        allUrl += '?' + tmps.join('&')
      }
      wx.navigateTo({
        url: allUrl
      })
    }
  }
})

const app = new Vue(App)
app.$mount()