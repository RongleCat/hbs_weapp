<template>
  <div class="page-container">
    <div class="common-block">
      <div class="common-title" @tap="nTo('/msg/list',{type:'1'})">
        <div class="left"><img src="/static/images/icon/msg_icon_1.png">回复我的</div>
        <div class="btn-text-more"><span class="number">8</span><span class="iconfont icon-you"></span></div>
      </div>
      <div class="common-title" @tap="nTo('/msg/list',{type:'2'})">
        <div class="left"><img src="/static/images/icon/msg_icon_2.png">用户私信</div>
        <div class="btn-text-more"><span class="number">8</span><span class="iconfont icon-you"></span></div>
      </div>
      <div class="common-title" @tap="nTo('/msg/list',{type:'3'})">
        <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div>
        <div class="btn-text-more"><span class="number">8</span><span class="iconfont icon-you"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 25rpx 25rpx;
  padding-bottom: 65rpx;
  .common-title {
    @include tapMask;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 70rpx;
        height: 70rpx;
        border-radius: 50%;
        margin-right: 20rpx;
      }
    }
    .btn-text-more {
      display: flex;
      align-items: center;
      .number {
        display: block;
        width: 36rpx;
        height: 36rpx;
        border-radius: 50%;
        background: #f00;
        color: #fff;
        line-height: 36rpx;
        text-align: center;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>