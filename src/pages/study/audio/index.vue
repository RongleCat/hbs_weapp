<template>
  <div class="page-container">
    <div class="head">
      <div class="nav">
        <div class="item" :class="[typeIndex == 0?'active':'']" @tap="typeIndex = 0">免费<span></span></div>
        <div class="item" :class="[typeIndex == 1?'active':'']" @tap="typeIndex = 1">付费<span></span></div>
      </div>
      <div class="search-box">
        <input type="text" placeholder="搜索">
        <span class="iconfont icon-sousuo"></span>
      </div>
      <scroll-view class="nav-list" :scroll-x="true" :scroll-into-view="scrollInto"
        :scroll-with-animation="true">
        <div class="item" :class="[navIndex == 0?'active':'']" @tap="navIndex = 0"
          id="item-0">最新<span></span></div>
        <div class="item" :class="[navIndex == 1?'active':'']" @tap="navIndex = 1"
          id="item-1">孩子心理<span></span></div>
        <div class="item" :class="[navIndex == 2?'active':'']" @tap="navIndex = 2"
          id="item-2">家庭教育<span></span></div>
        <div class="item" :class="[navIndex == 3?'active':'']" @tap="navIndex = 3"
          id="item-3">家庭教育<span></span></div>
        <div class="item" :class="[navIndex == 4?'active':'']" @tap="navIndex = 4"
          id="item-4">家庭教育<span></span></div>
        <div class="item" :class="[navIndex == 5?'active':'']" @tap="navIndex = 5"
          id="item-5">家庭教育<span></span></div>
      </scroll-view>
    </div>
    <div class="content-container">
      <div class="swiper-container">
        <swiper :indicator-dots="false" :interval="5000" :easing-function="easeInOutCubic"
          :duration="200" class="audio-swiper" @change="swiperChange" :current="navIndex">
          <swiper-item class="audio-list" v-for="(j,jindex) in 5" :key="jindex">
            <div class="item" v-for="(i,index) in 5" :key="index">
              <div class="cover">
                <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png" />
                <div class="price">￥123</div>
              </div>
              <div class="right">
                <h5>培养会吃苦，爱劳动的孩子培养会吃苦，爱劳动的孩子<div class="c-tag">学习力</div>
                </h5>
                <div class="item-info">
                  <div class="man">
                    主讲人：爸爸时间<br>
                    专家团：刘鹏志
                  </div>
                  <div class="like"><span class="iconfont icon-zan"></span>3256</div>
                </div>
                <div class="btn-ctrl play"></div>
              </div>
            </div>
          </swiper-item>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import imageFormat from '@/components/image.vue'
export default {
  data() {
    return {
      navIndex: 0,
      typeIndex: 0,
      problemList: []
    }
  },
  computed: {
    scrollInto() {
      return 'item-' + this.navIndex
    }
  },
  components: {
    imageFormat
  },
  async onLoad() {
    // let that = this
    // let res = await that.$fly.request({
    //   method: 'post',
    //   url: '/api',
    //   body: {
    //     api_name: 'xxgy.Index.index'
    //   }
    // })
    // if (res) {
    //   that.problemList = res.problem_list
    // } else {
    //   console.log('错误')
    // }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  background-color: $bg;
  display: flex;
  flex-direction: column;
  .content-container {
    width: 100%;
    flex: 1;
    display: flex;
  }
}
.nav {
  height: 100rpx;
  width: 100%;
  background: #00c862;
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
.search-box {
  background: #fff;
  padding: 0 25rpx;
  padding-top: 20rpx;
  position: relative;
  input {
    background: $bg;
    border-radius: 35rpx;
    height: 70rpx;
    padding-left: 70rpx;
    font-size: 28rpx;
  }
  .iconfont {
    position: absolute;
    top: 20rpx;
    display: block;
    width: 70rpx;
    height: 70rpx;
    line-height: 70rpx;
    text-align: center;
    color: $t9;
  }
}
.nav-list {
  width: 100%;
  background: #fff;
  height: 100rpx;
  color: $main;
  flex-shrink: 1;
  white-space: nowrap;
  font-size: 28rpx;
  line-height: 100rpx;
  text-align: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: inline-block;
    position: relative;
    padding: 0 25rpx;
    // @include tapMask;
    span {
      display: block;
      width: 40rpx;
      height: 6rpx;
      background: $main;
      border-radius: 3rpx;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
    }
    &.active {
      span {
        opacity: 1;
      }
    }
    &:first-child {
      margin-left: 25rpx;
    }

    &:last-child {
      margin-right: 25rpx;
    }
  }
}
.swiper-container {
  width: 100%;
  .audio-swiper {
    width: 100%;
    height: 100%;
  }
  .audio-list {
    overflow-y: auto;
    padding: 25rpx;
    -webkit-overflow-scrolling: touch;
    .item {
      border-radius: 20rpx;
      background: #fff;
      margin-bottom: 25rpx;
      display: flex;
      padding: 30rpx;
      overflow: hidden;
      @include tapMask;
      .cover {
        width: 200rpx;
        height: 200rpx;
        flex-shrink: 1;
        position: relative;
        border-radius: 20rpx;
        overflow: hidden;
        .price {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 0 0 20rpx 0;
          background: #ffae0b;
          color: #fff;
          line-height: 36rpx;
          padding: 0 16rpx;
          font-size: 24rpx;
        }
      }
      .right {
        flex: 1;
        padding-left: 20rpx;
        position: relative;
        .btn-ctrl {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        h5 {
          font-size: 28rpx;
          line-height: 42rpx;
          padding-bottom: 5rpx;
          .c-tag {
            color: #ffae0b;
            background: #fff7eb;
          }
        }
        .item-info {
          font-size: 24rpx;
          color: $t9;
          line-height: 1.5;
          padding-right: 88rpx;
          .like {
            padding-top: 5rpx;
            color: $t3;
            .iconfont {
              font-size: 24rpx;
              padding-right: 5rpx;
            }
          }
        }
      }
    }
  }
}
</style>