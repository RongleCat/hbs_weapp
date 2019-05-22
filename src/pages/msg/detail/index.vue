<template>
  <div class="page-container">
    <div class="common-block">
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
          <div class="text">测试测试</div>
        </div>
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
  padding: 25rpx;
  padding-bottom: 65rpx;
  display: flex;
}
.common-block {
  flex: 1;
}
.msg-item {
  border-bottom: 1rpx solid $bc;
  font-size: 26rpx;
  .msg-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
    padding: 30rpx;
    border-bottom: 1rpx solid $bc;
    .left {
      display: flex;
      align-items: center;
    }
    .time {
      font-size: 24rpx;
    }
    img {
      width: 44rpx;
      height: 44rpx;
      border-radius: 50%;
      margin-right: 20rpx;
    }
  }
  .msg-content {
    padding: 30rpx;
    line-height: 1.5;
  }
  &:last-child {
    border-bottom: 0;
  }
}
</style>