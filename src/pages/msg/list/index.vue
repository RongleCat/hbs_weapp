<template>
  <div class="page-container">
    <div class="common-block">
      <div class="msg-item" @tap="nTo('/msg/detail',{id:1})">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试</div>
      </div>
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试</div>
      </div>
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试</div>
      </div>
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
      </div>
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
      </div>
      <div class="msg-item">
        <div class="msg-info">
          <div class="left"><img src="/static/images/icon/msg_icon_3.png">官方消息</div><span
            class="time">2019-05-16 10:43</span>
        </div>
        <div class="msg-content">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  onLoad(option) {
    console.log(option)
    let titles = ['回复我的', '用户私信', '官方消息']
    // console.log(option.type);
    wx.setNavigationBarTitle({
      title: titles[+option.type - 1]
    })
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 25rpx;
  padding-bottom: 65rpx;
}
.msg-item {
  @include tapMask;
  border-bottom: 1rpx solid $bc;
  font-size: 26rpx;
  padding: 30rpx;
  .msg-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;
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
  .msg-content{
    padding-top: 20rpx;
    padding-left: 64rpx;
    line-height: 1.5;
    @include textof;
  }
  &:last-child {
    border-bottom: 0;
  }
}
</style>