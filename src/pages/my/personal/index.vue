<template>
  <div class="page-container">
    <div class="common-block link-list">
      <div class="common-title height">
        头像
        <div class="btn-text-more">
          <div class="head-box">
            <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png"
              :radius="true" />
          </div>
          <div class="iconfont icon-you"></div>
        </div>
      </div>
      <div class="common-title">
        姓名
        <div class="btn-text-more">
          <span>曹铁柱</span>
          <div class="iconfont icon-you"></div>
        </div>
      </div>
      <div class="common-title">
        性别
        <div class="btn-text-more">
          <span>男</span>
          <div class="iconfont icon-you"></div>
        </div>
      </div>
      <div class="common-title">
        联系电话
        <div class="btn-text-more">
          <span>18367833505</span>
          <div class="iconfont icon-you"></div>
        </div>
      </div>
    </div>
    <div class="tip-text">学生列表</div>
    <div class="common-block link-list">
      <div class="common-title">
        曹吉帅
        <div class="btn-text-more">
          <div class="iconfont icon-you"></div>
        </div>
      </div>
      <div class="common-title">
        曹吉美
        <div class="btn-text-more">
          <div class="iconfont icon-you"></div>
        </div>
      </div>
    </div>
    <div class="common-btn btn-loginout"><span class="iconfont icon-tuichu"></span>退出登录</div>
    <div class="add-child-box">
      <div class="common-btn">
        <span class="iconfont icon-tianjia"></span>
        添加学生
      </div>
      如果您有多个孩子需要添加
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
  padding: 25rpx;
  padding-bottom: 65rpx;
  .common-block {
    margin-top: 0;
    margin-bottom: 30rpx;
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
    &.height {
      height: auto;
      padding-top: 20rpx;
      padding-bottom: 20rpx;
    }
    .btn-text-more {
      display: flex;
      align-items: center;
      .head-box {
        width: 120rpx;
        height: 120rpx;
        margin-right: 20rpx;
      }
      span {
        padding-right: 20rpx;
        font-size: 28rpx;
      }
    }
  }
}
.tip-text {
  line-height: 1;
  font-size: 24rpx;
  padding-bottom: 20rpx;
  color: #999;
}
.btn-loginout {
  border-radius: 20rpx;
  background: #fff;
  color: #ff3347;
  overflow: hidden;
  @include tapMask;
  .iconfont {
    font-size: 30rpx;
    margin-right: 10rpx;
  }
}
.add-child-box {
  padding-top: 60rpx;
  line-height: 64rpx;
  font-size: 20rpx;
  color: #666;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .common-btn {
    width: 230rpx;
    @include tapColor;
    background: #e2f2e7;
    color: $main;
    border-radius: 44rpx;
    .iconfont {
      font-size: 30rpx;
    }
  }
}
</style>