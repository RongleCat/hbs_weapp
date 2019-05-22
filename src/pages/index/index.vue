<template>
  <div class="page-container">
    <div class="float-btn-ask">
      <div class="iconfont icon-edit"></div>
      提问
    </div>
    <div class="swiper-container">
      <swiper :indicator-dots="false" :autoplay="true" :interval="5000"
        :duration="500" :circular="true" class="index-swiper" @change="swiperChange">
        <block v-for="(i,index) in imgUrls" :key="index">
          <swiper-item class="swiper-item">
            <image :src="i.pic" class="slide-image" mode="aspectFill" />
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
        <div class="item" @tap="sTo('/study/index')">
          <image src="/static/images/index/index_icon_1.png" mode="aspectFill" />
          学学
        </div>
        <div class="item" @tap="nTo('/activity/index')">
          <image src="/static/images/index/index_icon_2.png" mode="aspectFill" />
          活动
        </div>
        <div class="item" @tap="sTo('/my/index')">
          <image src="/static/images/index/index_icon_3.png" mode="aspectFill" />
          我的
        </div>
        <div class="item" @tap="nTo('/msg/index')">
          <image src="/static/images/index/index_icon_4.png" mode="aspectFill" />
          通知<span v-if="msgCount">{{msgCount}}</span>
        </div>
      </div>
      <div class="common-block server-box mt-25">
        <div class="common-title">
          我们的服务
        </div>
        <div class="content">
          <div class="left" @tap="sTo('/inquiry/index')">
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
      <div class="common-block qa-box mt-25">
        <div class="common-title tap-mask" @tap="sTo('/ask/index')">
          问答广场
          <div class="btn-text-more">更多></div>
        </div>
        <div class="content">
          <div class="item" v-for="(i,index) in problemList" :key="index">
            <div class="user-info">
              <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
              <div class="head-box">
                <imageFormat :src="i.headimgurl" :radius="true" />
              </div>
              <div class="info">
                <div class="username">{{i.realname}}</div>
                <div class="taglist">
                  <div class="c-tag">{{i.type_name}}</div>
                </div>
              </div>
            </div>
            <div class="ask-content">
              {{i.content}}
            </div>
            <div class="item-info">
              <div class="left">
                <span class="iconfont icon-see"></span>
                {{i.clickdot}}
                <span class="iconfont icon-msg"></span>
                {{i.answer_num}}
              </div>
              <div class="right">
                {{i.addtime}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import imageFormat from '@/components/image.vue'
export default {
  data() {
    return {
      imgUrls: [],
      current: 0,
      problemList: [],
      msgCount:8
    }
  },
  components: {
    imageFormat
  },
  async onLoad() {
    let that = this
    let res = await that.$fly.request({
      method: 'post',
      url: '/api',
      body: {
        api_name: 'xxgy.Index.index'
      }
    })
    if (res) {
      that.imgUrls = res.cust_flash_list
      that.problemList = res.problem_list
      wx.setNavigationBarTitle({
        title: res.head_title
      })
    } else {
      console.log('错误')
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
  position: relative;
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
    @include tapColor;
    color: #999;
    font-size: 24rpx;
    line-height: 56rpx;
    position: relative;
    span {
      display: block;
      width: 36rpx;
      height: 36rpx;
      background: #f02c1f;
      border: 2rpx solid #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: -18rpx;
      right: 18rpx;
      box-shadow: 0 0 10rpx rgba(#000,.2);
    }
    image {
      width: 100rpx;
      height: 100rpx;
    }
  }
}

.server-box {
  .content {
    display: flex;
    .left {
      @include tapMask;
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
      .item {
        @include tapMask;
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25rpx;
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
        &:last-child {
          border-top: 1rpx solid $bc;
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
  .common-title {
    &:after {
      border-radius: 20rpx 20rpx 0 0;
    }
  }
  .content {
    .item {
      padding: 30rpx;
      border-bottom: 1rpx solid #e5e5e5;
      @include tapMask;
      .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 30rpx;
        .head-box {
          width: 70rpx;
          height: 70rpx;
          flex-shrink: 1;
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
        &:after {
          border-radius: 0 0 20rpx 20rpx;
        }
      }
    }
  }
}

.float-btn-ask {
  @include tapMask;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60rpx;
  height: 80rpx;
  border: 2rpx solid $main;
  position: fixed;
  right: 0;
  bottom: 200rpx;
  border-right: 0;
  color: $main;
  font-size: 20rpx;
  border-radius: 12rpx 0 0 12rpx;
  background: rgba(#fff, 0.5);
  z-index: 100;

  .iconfont {
    font-size: 36rpx;
  }
}
</style>
