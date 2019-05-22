<template>
  <div class="page-container">
    <div class="swiper-container">
      <swiper :indicator-dots="false" :autoplay="true" :interval="5000"
        :duration="500" :circular="true" class="index-swiper" @change="swiperChange">
        <block v-for="(i,index) in imgUrls" :key="index">
          <swiper-item class="swiper-item">
            <image :src="i" class="slide-image" mode="center" />
          </swiper-item>
        </block>
      </swiper>
      <div class="swiper-dots">
        <div class="item" v-for="(i,index) in imgUrls.length" :key="index"
          :class="[current == index?'current-active':'']"></div>
      </div>
    </div>
    <div class="other-content">
      <div class="common-block">
        <div class="common-title tap-mask" @tap="nTo('/study/audio')">
          音频课程
          <div class="btn-text-more">更多></div>
        </div>
        <div class="content audio-list">
          <div class="item" @tap="nTo('/study/audio_detail',{id:1})">
            <div class="cover">
              <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/defult_head.jpg">
              <div class="info"><span class="iconfont icon-yinyue"></span> 1234</div>
            </div>
            培养会吃苦，爱劳动的孩子
          </div>
          <div class="item">
            <div class="cover">
              <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
              <div class="info"><span class="iconfont icon-yinyue"></span> 1234</div>
            </div>
            培养会吃苦，爱劳动的孩子
          </div>
          <div class="item">
            <div class="cover">
              <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
              <div class="info"><span class="iconfont icon-yinyue"></span> 1234</div>
            </div>
            培养会吃苦，爱劳动的孩子培养会吃苦，爱劳动的孩子
          </div>
        </div>
      </div>
      <div class="common-block">
        <div class="common-title tap-mask" @tap="nTo('/study/article')">
          推荐阅读
          <div class="btn-text-more">更多></div>
        </div>
        <div class="content read-list">
          <div class="item" @tap="nTo('/study/article_detail',{id:1})">
            <div class="read-info">
              <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
              <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
              <div class="info">
                <div class="left"><span class="iconfont icon-see"></span> 188</div>
                <div class="right">2019-05-13</div>
              </div>
            </div>
            <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
          </div>
          <div class="item">
            <div class="read-info">
              <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
              <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
              <div class="info">
                <div class="left"><span class="iconfont icon-see"></span> 188</div>
                <div class="right">2019-05-13</div>
              </div>
            </div>
            <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
          </div>
          <div class="item">
            <div class="read-info">
              <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
              <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
              <div class="info">
                <div class="left"><span class="iconfont icon-see"></span> 188</div>
                <div class="right">2019-05-13</div>
              </div>
            </div>
            <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
          </div>
          <div class="item">
            <div class="read-info">
              <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
              <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
              <div class="info">
                <div class="left"><span class="iconfont icon-see"></span> 188</div>
                <div class="right">2019-05-13</div>
              </div>
            </div>
            <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
          </div>
          <div class="item">
            <div class="read-info">
              <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
              <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
              <div class="info">
                <div class="left"><span class="iconfont icon-see"></span> 188</div>
                <div class="right">2019-05-13</div>
              </div>
            </div>
            <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrls: [
        'https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/swiper/1.jpg',
        'https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/swiper/2.jpg',
        'https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/swiper/3.jpg'
      ],
      current: 0
    }
  },
  methods: {
    swiperChange(e) {
      this.current = e.target.current
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom, $main, $main);
  background-repeat: no-repeat;
  background-size: 100% 170rpx;
  background-position: top center;
  padding-bottom: 65rpx;
  font-size: 24rpx;
}
.swiper-container {
  padding-top: 25rpx;
  // padding-bottom: 44rpx;
  position: relative;
  .swiper-dots {
    width: 100%;
    height: 44rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .item {
      width: 10rpx;
      height: 10rpx;
      background: #cccccc;
      border-radius: 5rpx;
      margin: 0 5rpx;
      transition: all 0.2s;
      &.current-active {
        background: $main;
        width: 20rpx;
      }
    }
  }
}
.index-swiper {
  width: 100%;
  height: 210rpx;
  .swiper-item {
    padding: 0 25rpx;
    .slide-image {
      width: 100%;
      height: 100%;
      border-radius: 25rpx;
    }
  }
}
.other-content {
  padding: 0 25rpx;
}
.common-block {
  background: #fff;
  border-radius: 20rpx;
  margin-top: 25rpx;
  .common-title {
    line-height: 100rpx;
    padding: 0 30rpx;
    font-size: 28rpx;
    color: #333;
    border-bottom: 1rpx solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.audio-list {
  padding: 30rpx 20rpx;
  display: flex;
  .item {
    @include tapColor;
    flex: 1;
    padding: 0 10rpx;
    font-size: 26rpx;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    .cover {
      width: 200rpx;
      height: 200rpx;
      position: relative;
      border-radius: 10rpx;
      overflow: hidden;
      margin-bottom: 10rpx;
      img {
        width: 100%;
        height: 100%;
      }
      .info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        line-height: 46rpx;
        color: #fff;
        background: rgba(#222, 0.4);
        padding-left: 15rpx;
        align-items: center;
        .iconfont {
          font-size: 24rpx;
        }
      }
    }
  }
}

.read-list {
  width: 100%;
  .item {
    @include tapMask;
    padding: 30rpx;
    display: flex;
    border-bottom: 1rpx solid #e5e5e5;
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
      .info {
        display: flex;
        justify-content: space-between;
        padding-top: 20rpx;
        line-height: 1;
        .iconfont {
          font-size: 24rpx;
        }
        .right {
          color: #999;
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