<template>
  <div class="page-container">
    <div class="common-block user-info" @tap="nTo('/my/personal')">
      <div class="head-box">
        <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png"
          :radius="true" />
      </div>
      <div class="other">
        <div class="username">曹铁柱</div>
        <div class="c-tag">家长</div>
      </div>

      <span class="iconfont icon-you"></span>
    </div>
    <div class="common-block wait-list">
      <div class="common-title">待接受<div class="btn-text-more">2019-05-14 14:07</div>
      </div>
      <div class="doctor-info">
        <div class="head">
          <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png" />
        </div>
        <div class="info">
          <div class="left">
            <div class="username">许琴</div>
            <div class="c-tag">家庭教育问题</div>
          </div>
          <div class="btn-call"><span class="iconfont icon-boda"></span>拨打</div>
        </div>
      </div>
    </div>
    <div class="common-block link-list">
      <div class="common-title">测评记录<div class="btn-text-more iconfont icon-you"></div>
      </div>
      <div class="common-title">问答记录<div class="btn-text-more iconfont icon-you"></div>
      </div>
      <div class="common-title">咨询订单<div class="btn-text-more iconfont icon-you"></div>
      </div>
      <div class="common-title">学学订单<div class="btn-text-more iconfont icon-you"></div>
      </div>
      <div class="common-title">活动订单<div class="btn-text-more iconfont icon-you"></div>
      </div>
    </div>
    <div class="common-block link-list">
      <div class="common-title">财务明细<div class="btn-text-more iconfont icon-you"></div>
      </div>
    </div>
    <div class="common-block link-list">
      <div class="common-title">关于我们<div class="btn-text-more iconfont icon-you"></div>
      </div>
      <div class="common-title">系统设置<div class="btn-text-more iconfont icon-you"></div>
      </div>
    </div>
  </div>
</template>

<script>
import imageFormat from '@/components/image.vue'
export default {
  data() {
    return {}
  },
  components: {
    imageFormat
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
  padding: 25rpx 25rpx 65rpx 25rpx;
  .common-block {
    margin-top: 0;
    margin-bottom: 25rpx;
  }
}
.user-info {
  padding: 30rpx;
  display: flex;
  height: 210rpx;
  align-items: center;
  position: relative;
  overflow: hidden;
  @include tapMask;
  .head-box {
    width: 100rpx;
    height: 100rpx;
    flex-shrink: 1;
  }
  .other {
    flex: 1;
    padding-left: 20rpx;
    .username {
      line-height: 1;
      padding-bottom: 20rpx;
    }
    .c-tag {
      background: #e8fafd;
      color: #00c6e5;
    }
  }

  .iconfont {
    font-size: 28rpx;
    line-height: 1;
    position: absolute;
    right: 25rpx;
    top: 87rpx;
    color: #ccc;
  }
}
.doctor-info {
  padding: 30rpx;
  display: flex;
  .head {
    width: 100rpx;
    height: 100rpx;
    border-radius: 20rpx;
    overflow: hidden;
  }
  .info {
    padding-left: 20rpx;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      flex: 1;
    }
    .btn-call {
      width: 160rpx;
      height: 88rpx;
      line-height: 88rpx;
      color: #fff;
      background: $main;
      text-align: center;
      border-radius: 20rpx;
      font-size: 28rpx;
      .iconfont {
        font-size: 28rpx;
        padding-right: 10rpx;
      }
    }
  }
}
.link-list {
  overflow: hidden;
  .common-title {
    @include tapMask;
    .iconfont {
      font-size: 28rpx;
      color: #ccc;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>