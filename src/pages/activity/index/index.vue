<template>
  <div class="page-container">
    <div class="nav">
      <div class="item" :class="[navIndex == 0?'active':'']" @tap="navIndex = 0">线下课程<span></span></div>
      <div class="item" :class="[navIndex == 1?'active':'']" @tap="navIndex = 1">公益活动<span></span></div>
    </div>
    <div class="content-container">
      <div class="swiper-container">
        <swiper :indicator-dots="false" :interval="5000" :easing-function="easeInOutCubic"
          :duration="200" class="activity-swiper" @change="swiperChange"
          :current="navIndex">
          <swiper-item class="activity-list">
            <div class="item" v-for="i in 10" :key="i" @tap="nTo('/activity/detail',{di:1})">
              <div class="content">
                <div class="read-info">
                  <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
                  <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
                </div>
                <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
              </div>
              <div class="info">
                <div class="left"><span class="iconfont icon-shijian"></span>2019-05-16
                  星期四 8:30</div>
                <div class="right">活动费用：<span>10元/位</span></div>
              </div>
            </div>
          </swiper-item>
          <swiper-item class="activity-list">
            <div class="item" v-for="i in 10" :key="i" @tap="nTo('/activity/detail',{di:2})">
              <div class="content">
                <div class="read-info">
                  <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
                  <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
                </div>
                <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
              </div>
              <div class="info">
                <div class="left"><span class="iconfont icon-shijian"></span>2019-05-16
                  星期四 8:30</div>
                <div class="right">活动费用：<span>10元/位</span></div>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0
    }
  },
  methods: {
    swiperChange(e) {
      this.navIndex = e.target.current
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-size: 24rpx;
  .content-container {
    width: 100%;
    flex: 1;
    display: flex;
  }
}
.nav {
  height: 100rpx;
  width: 100%;
  background: $nbg;
  color: #fff;
  display: flex;
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
.swiper-container {
  width: 100%;
  flex: 1;
  .activity-swiper {
    width: 100%;
    height: 100%;
  }
}
.activity-list {
  overflow-y: auto;
  padding: 25rpx;
  -webkit-overflow-scrolling: touch;
  .item {
    @include tapMask;
    padding: 30rpx;
    margin-bottom: 25rpx;
    background: #fff;
    border-radius: 20rpx;
    overflow: hidden;
    .content {
      display: flex;
    }
    .read-info {
      flex: 1;
      padding-right: 20rpx;
      .title {
        width: 100%;
        color: #333;
        font-size: 26rpx;
        line-height: 1;
        padding-bottom: 20rpx;
      }
      .more {
        color: #999;
        font-size: 24rpx;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .info {
      display: flex;
      justify-content: space-between;
      padding-top: 20rpx;
      line-height: 1;
      .iconfont {
        font-size: 24rpx;
        padding-right: 5rpx;
      }
      .right {
        color: #333;
        span {
          color: $main;
        }
      }
    }
    img {
      width: 200rpx;
      height: 120rpx;
      flex-shrink: 1;
      border-radius: 10rpx;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>