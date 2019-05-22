<template>
  <div class="page-container">
    <!-- <div class="nav-list">
      <div class="item" :class="[navIndex == 0?'active':'']" @tap="navIndex = 0">最新<span></span></div>
      <div class="item" :class="[navIndex == 1?'active':'']" @tap="navIndex = 1">孩子心理<span></span></div>
      <div class="item" :class="[navIndex == 2?'active':'']" @tap="navIndex = 2">家庭教育<span></span></div>
      <div class="item" :class="[navIndex == 3?'active':'']" @tap="navIndex = 3">家庭教育<span></span></div>
      <div class="item" :class="[navIndex == 4?'active':'']" @tap="navIndex = 4">家庭教育<span></span></div>
      <div class="item" :class="[navIndex == 5?'active':'']" @tap="navIndex = 5">家庭教育<span></span></div>
    </div> -->
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
    <div class="content-container">
      <div class="swiper-container">
        <swiper :indicator-dots="false" :interval="5000" :easing-function="easeInOutCubic"
          :duration="200" class="ask-swiper" @change="swiperChange"
          :current="navIndex">
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
          </swiper-item>
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
          </swiper-item>
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
          </swiper-item>
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
          </swiper-item>
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
          </swiper-item>
          <swiper-item class="ask-list">
            <div class="item" v-for="(i,index) in problemList" :key="index">
              <div class="user-info">
                <!-- <image :src="imgUrl(i.headimgurl)" mode="aspectFill" /> -->
                <div class="head">
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
      problemList: []
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
      that.problemList = res.problem_list
    } else {
      console.log('错误')
    }
  },
  computed: {
    scrollInto() {
      return 'item-' + this.navIndex
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
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  .content-container {
    width: 100%;
    flex: 1;
  }
}
.nav-list {
  width: 100%;
  background: #53c46d;
  height: 100rpx;
  color: #fff;
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
    width: 200rpx;
    @include tapMask;
    span {
      width: 0;
      height: 0;
      border-width: 0 11rpx 11rpx;
      border-style: solid;
      border-color: transparent transparent #f5f5f5;
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
  height: 100%;
  .ask-swiper {
    width: 100%;
    height: 100%;
  }
  .ask-list {
    overflow-y: auto;
    padding: 25rpx;
    -webkit-overflow-scrolling: touch;
    .item {
      overflow: hidden;
      @include tapMask;
      padding: 30rpx;
      margin-bottom: 25rpx;
      background: #fff;
      border-radius: 20rpx;
      .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 30rpx;
        .head {
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
</style>