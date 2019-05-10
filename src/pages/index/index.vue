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
      <div class="main-btn-box">
        <div class="item">
          <image src="/static/images/index/index_icon_1.png" mode="aspectFill" />
          <span>学学</span>
        </div>
        <div class="item">
          <image src="/static/images/index/index_icon_2.png" mode="aspectFill" />
          <span>活动</span>
        </div>
        <div class="item" @tap="sTo('/my')">
          <image src="/static/images/index/index_icon_3.png" mode="aspectFill" />
          <span>我的</span>
        </div>
        <div class="item">
          <image src="/static/images/index/index_icon_4.png" mode="aspectFill" />
          <span>通知</span>
        </div>
      </div>
      <div class="common-block server-box">
        <div class="common-title">
          我们的服务
        </div>
        <div class="content">
          <div class="left">
            <image src="/static/images/index/index_server_1.png" />
            <div class="s-title">直接咨询</div>
            <p>免费提问 专业解答</p>
            <p>有<span class="c-tag">3223</span>个回答</p>
          </div>
          <div class="right">
            <div class="item">
              <div class="text">
                <div class="s-title">测评中心</div>
                <p>免费评测 发现问题</p>
              </div>
              <div class="img">
                <image src="/static/images/index/index_server_2.png" />
              </div>
            </div>
            <div class="item">
              <div class="text">
                <div class="s-title">专家门诊</div>
                <p>预约专家 解决问题</p>
              </div>
              <div class="img">
                <image src="/static/images/index/index_server_3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="common-block qa-box">
        <div class="common-title">
          问答广场
          <div class="btn-text-more">更多></div>
        </div>
        <div class="content">
          <div class="item">
            <div class="user-info">
              <image src="/static/images/default_head.jpg" mode="aspectFill" />
              <div class="info">
                <div class="username">曹铁柱</div>
                <div class="taglist">
                  <div class="c-tag">孩子心理</div>
                </div>
              </div>
            </div>
            <div class="ask-content">
              男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学
            </div>
            <div class="item-info">
              <div class="left">
                <span class="iconfont icon-see"></span>
                18
                <span class="iconfont icon-msg"></span>
                18
              </div>
              <div class="right">
                2018-09-11
              </div>
            </div>
          </div>
          <div class="item">
            <div class="user-info">
              <image src="/static/images/default_head.jpg" mode="aspectFill" />
              <div class="info">
                <div class="username">曹铁柱</div>
                <div class="taglist">
                  <div class="c-tag">孩子心理</div>
                </div>
              </div>
            </div>
            <div class="ask-content">
              男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学
            </div>
            <div class="item-info">
              <div class="left">
                <span class="iconfont icon-see"></span>
                18
                <span class="iconfont icon-msg"></span>
                18
              </div>
              <div class="right">
                2018-09-11
              </div>
            </div>
          </div>
          <div class="item">
            <div class="user-info">
              <image src="/static/images/default_head.jpg" mode="aspectFill" />
              <div class="info">
                <div class="username">曹铁柱</div>
                <div class="taglist">
                  <div class="c-tag">孩子心理</div>
                </div>
              </div>
            </div>
            <div class="ask-content">
              男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学
            </div>
            <div class="item-info">
              <div class="left">
                <span class="iconfont icon-see"></span>
                18
                <span class="iconfont icon-msg"></span>
                18
              </div>
              <div class="right">
                2018-09-11
              </div>
            </div>
          </div>
          <div class="item">
            <div class="user-info">
              <image src="/static/images/default_head.jpg" mode="aspectFill" />
              <div class="info">
                <div class="username">曹铁柱</div>
                <div class="taglist">
                  <div class="c-tag">孩子心理</div>
                </div>
              </div>
            </div>
            <div class="ask-content">
              男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学
            </div>
            <div class="item-info">
              <div class="left">
                <span class="iconfont icon-see"></span>
                18
                <span class="iconfont icon-msg"></span>
                18
              </div>
              <div class="right">
                2018-09-11
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="float-btn-ask">
      <div class="iconfont icon-edit"></div>
      提问
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
  background-image: linear-gradient(to bottom, #00d164, #00d164);
  background-repeat: no-repeat;
  background-size: 100% 170rpx;
  background-position: top center;
  padding-bottom: 65rpx;
  // padding: 0 25rpx;
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
        background: #00d164;
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

.main-btn-box {
  width: 100%;
  padding-top: 12rpx;
  display: flex;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      color: #999;
      font-size: 24rpx;
      line-height: 56rpx;
    }
    image {
      width: 100rpx;
      height: 100rpx;
    }
  }
}

.common-block {
  background: #fff;
  border-radius: 20rpx;
  margin-top: 30rpx;
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

.server-box {
  .content {
    display: flex;
    .left {
      width: 350rpx;
      padding: 18rpx 50rpx 30rpx 50rpx;
      border-right: 1rpx solid #e5e5e5;
      image {
        width: 250rpx;
        height: 137rpx;
        margin-bottom: 10rpx;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 35rpx 30rpx 35rpx 25rpx;
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .img {
          width: 80rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          image {
            width: 80rpx;
            height: 92rpx;
          }
        }
      }
    }
    .s-title {
      font-size: 26rpx;
      color: #333;
      line-height: 40rpx;
    }
    p {
      color: #8b8b8b;
      font-size: 22rpx;
      line-height: 38rpx;
      .c-tag {
        vertical-align: -2rpx;
        margin: 0 2rpx;
      }
    }
  }
}
.qa-box {
  .btn-text-more {
    font-size: 22rpx;
    color: #999;
  }
  .content {
    .item {
      padding: 30rpx;
      border-bottom: 1rpx solid #e5e5e5;
      .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 30rpx;
        image {
          width: 70rpx;
          height: 70rpx;
          flex-shrink: 1;
          border-radius: 50%;
        }
        .info {
          flex: 1;
          padding-left: 30rpx;
          .username {
            font-size: 28rpx;
            line-height: 1.5;
            padding-left: 2rpx;
          }
          .c-tag {
            margin-right: 5rpx;
          }
        }
      }
      .ask-content {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 28rpx;
        line-height: 1.5;
      }
      .item-info {
        padding-top: 30rpx;
        display: flex;
        font-size: 24rpx;
        justify-content: space-between;
        color: #333;
        .iconfont {
          font-size: 24rpx;
        }
        .right {
          color: #999;
        }
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
.float-btn-ask {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60rpx;
  height: 80rpx;
  border: 2rpx solid #00d164;
  position: fixed;
  right: 0;
  bottom: 200rpx;
  border-right: 0;
  color: #00d164;
  font-size: 20rpx;
  border-radius: 12rpx 0 0 12rpx;
  background: rgba(#fff, 0.5);
  .iconfont {
    font-size: 36rpx;
  }
}
</style>
