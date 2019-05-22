<template>
  <div class="page-container">
    <div class="head-box">
      <div class="nav">
        <div class="item" :class="[navIndex == 1?'active':'']" @tap="navIndex = 1">登录<span></span></div>
        <div class="item" :class="[navIndex == 2?'active':'']" @tap="navIndex = 2">注册<span></span></div>
      </div>
    </div>
    <div class="body-box" :class="[navSelect]">
      <div class="content-list">
        <div class="item">
          <div class="input-item">
            <input type="number" placeholder="手机号" v-model="loginPost.mobile"
              @blur="verificationLogin('phone',loginPost.mobile)">
          </div>
          <div class="input-item">
            <input type="password" placeholder="登录密码" v-model="loginPost.password"
              @blur="verificationLogin('password',loginPost.password)">
          </div>
          <div class="tip-text"><template v-if="loginTipText"><span class="iconfont icon-guanbi"></span>{{loginTipText}}</template></div>
          <div class="common-btn" @tap="submitLogin">登录</div>
        </div>
        <div class="item">
          <div class="input-item">
            <input type="number" placeholder="手机号" v-model="regPost.mobile"
              @blur="verificationReg('phone',regPost.mobile)">
          </div>
          <div class="input-item code">
            <input type="number" placeholder="验证码" v-model="regPost.verify_code"
              @blur="verificationReg('verify_code',regPost.verify_code)">
            <span v-if="!countdown" @tap="getCode">获取验证码</span>
            <span v-else>重新获取 {{countdown}}s</span>
          </div>
          <div class="input-item">
            <input type="password" placeholder="设置登录密码" v-model="regPost.password"
              @blur="verificationReg('password',regPost.password)">
          </div>
          <div class="tip-text"><template v-if="regTipText"><span class="iconfont icon-guanbi"></span>{{regTipText}}</template></div>
          <div class="common-btn" @tap="submitReg">完成注册</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from '../../../utils/md5.js'
export default {
  data() {
    return {
      navIndex: null,
      loginTipText: '',
      regTipText: '',
      loginPost: {
        mobile: '',
        password: ''
      },
      regPost: {
        mobile: '',
        verify_code: '',
        password: ''
      },
      countdown: 0
    }
  },
  onUnload: function() {
    if (true) {
      wx.reLaunch({
        url: '/pages/index/main'
      })
    }
  },
  computed: {
    navSelect() {
      if (this.navIndex == 1) {
        wx.setNavigationBarTitle({
          title: '登录'
        })
      } else {
        wx.setNavigationBarTitle({
          title: '注册'
        })
      }
      this.regTipText = this.loginTipText = ''
      return this.navIndex == 2 ? 'reg' : ''
    }
  },
  async onLoad(options) {
    this.navIndex = options.state || 1
    // try {
    //   let res = await this.$fly.request({
    //     method: 'post',
    //     url: '/api',
    //     body: { a: 1 }
    //   })
    //   console.log(res)
    // } catch (error) {
    //   console.log(error)
    // }
  },
  methods: {
    verificationReg(type, value) {
      let that = this
      that.regTipText = ''
      if (type === 'phone' && !/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
        that.regTipText = '手机号码格式不正确！'
      } else if (type === 'verify_code' && !/[0-9]{6}/.test(value)) {
        that.regTipText = '验证码为6位数字！'
      } else if (type === 'password' && !value.length) {
        that.regTipText = '请输入密码！'
      }
    },
    verificationLogin(type, value) {
      let that = this
      that.loginTipText = ''
      if (type === 'phone' && !/^[1][3,4,5,7,8][0-9]{9}$/.test(value)) {
        that.loginTipText = '手机号码格式不正确！'
      } else if (type === 'password' && !value.length) {
        that.loginTipText = '请输入密码！'
      }
    },
    async submitLogin() {
      let that = this
      let { mobile, password } = that.loginPost
      that.loginTipText = ''
      if (!password.length) {
        that.loginTipText = '请输入密码！'
      }
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
        that.loginTipText = '手机号码格式不正确！'
      }
      if (this.loginTipText) {
        wx.showToast({
          title: this.loginTipText,
          icon: 'none'
        })
        return false
      }
      password = md5(password)
      let res = await that.$fly.request({
        method: 'post',
        url: '/api',
        body: {
          api_name: 'xxgy.User.login',
          mobile,
          password,
          jpush_reg_id: 11111
        }
      })
      if (res) {
        wx.showToast({
          title: '登录成功!'
        })
        wx.setStorage({
          key: 'token',
          data: res.authorization,
          success() {
            wx.navigateBack({
              delta: 1
            })
          }
        })
      }
    },
    async submitReg() {
      let that = this
      let { mobile, verify_code, password } = that.regPost
      that.regTipText = ''
      if (!password.length) {
        that.regTipText = '请输入密码！'
      }
      if (!/[0-9]{6}/.test(verify_code)) {
        that.regTipText = '验证码为6位数字！'
      }
      if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(mobile)) {
        that.regTipText = '手机号码格式不正确！'
      }
      if (this.regTipText) {
        wx.showToast({
          title: this.regTipText,
          icon: 'none'
        })
        return false
      }
      password = md5(password)
      let res = await that.$fly.request({
        method: 'post',
        url: '/api',
        body: {
          api_name: 'xxgy.User.register',
          mobile,
          password,
          verify_code,
          jpush_reg_id: 11111
        }
      })
      if (res) {
        wx.showToast({
          title: '注册成功!'
        })
        wx.setStorage({
          key: 'token',
          data: res.authorization,
          success() {
            wx.navigateBack({
              delta: 1
            })
          }
        })
      }
    },
    async getCode() {
      let that = this
      if (!that.countdown) {
        if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(that.regPost.mobile)) {
          that.regTipText = '手机号码格式不正确！'
          return false
        }
        console.log('获取验证码')
        let res = await that.$fly.request({
          method: 'post',
          url: '/api',
          body: {
            api_name: 'xxgy.User.sendVerifyCode',
            mobile: that.regPost.mobile
          }
        })
        that.countdown = 59
        let cd = setInterval(() => {
          that.countdown -= 1
          if (!that.countdown) {
            clearInterval(cd)
          }
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .head-box {
    width: 100%;
    height: 478rpx;
    background-size: cover;
    background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/login_bg.jpg');
    position: relative;
    .nav {
      height: 100rpx;
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(#39cf5c, 0.8);
      color: #fff;
      display: flex;
      padding: 0 220rpx;
      font-size: 28rpx;
      line-height: 100rpx;
      text-align: center;
      .item {
        flex: 1;
        position: relative;
        span {
          width: 0;
          height: 0;
          border-width: 0 11rpx 11rpx;
          border-style: solid;
          border-color: transparent transparent #fff;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        &.active {
          span {
            opacity: 1;
          }
        }
      }
    }
  }
  .body-box {
    overflow-y: auto;
    flex: 1;
    overflow-x: hidden;
    background: #f5f5f5;
    .content-list {
      display: flex;
      transition: transform 0.2s;
      .item {
        width: 100vw;
        flex-shrink: 0;
        padding: 0 40rpx;
        .input-item {
          height: 124rpx;
          border-bottom: 1px solid #e5e5e5;
          input {
            height: 100%;
            font-size: 28rpx;
          }
          &.code {
            display: flex;
            span {
              width: 270rpx;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              font-size: 28rpx;
              color: $main;
            }
            input {
              flex: 1;
            }
          }
        }
        .tip-text {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 110rpx;
          padding-bottom: 30rpx;
          color: rgb(255, 104, 109);
          font-size: 28rpx;
          line-height: 1;
          .iconfont {
            font-size: 30rpx;
            padding-right: 5rpx;
          }
        }
      }
    }
    &.reg {
      .content-list {
        transform: translateX(-100vw);
      }
    }
  }
}
</style>