<script>
export default {}
</script>

<style lang="wxss">
@import '../static/font/iconfont.wxss';
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

view,
scroll-view,
swiper,
swiper-item,
movable-area,
movable-view,
cover-view,
cover-image,
icon,
text,
rich-text,
progress,
button,
checkbox-group,
checkbox,
form,
input,
label,
picker,
picker-view,
radio-group,
radio,
slider,
switch,
textarea,
navigator,
functional-page-navigator,
image,
video,
camera,
live-player,
live-pusher,
map,
canvas,
open-data,
web-view,
ad {
  box-sizing: border-box;
}
</style>

<style lang="scss">
.c-tag {
  display: inline-block;
  color: $main;
  background: $mainBg;
  line-height: 1.5;
  padding: 0 12rpx;
  border-radius: 15rpx;
  font-size: 22rpx;
}
.content-block {
  width: 100%;
  margin-bottom: 25rpx;
  border-radius: 20rpx;
  background: #fff;
  overflow: hidden;
  .head {
    line-height: 100rpx;
    padding-left: 30rpx;
    font-size: 28rpx;
    color: #333;
    font-weight: bold;
  }
  .body {
    padding: 30rpx;
    padding-top: 0;
  }
}

.common-btn {
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  font-size: 30rpx;
  color: #fff;
  background: $main;
  border-radius: 10rpx;
  border: 0;
  overflow: hidden;
  @include tapMask;
  &.radius {
    border-radius: 44rpx;
  }
}

.common-block {
  background: #fff;
  border-radius: 20rpx;
  overflow: hidden;
  &.mt-25 {
    margin-top: 25rpx;
  }
  .common-title {
    line-height: 100rpx;
    padding: 0 30rpx;
    font-size: 28rpx;
    color: #333;
    border-bottom: 1rpx solid $bc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn-text-more {
      font-size: 22rpx;
      color: #999;
    }
  }
}

.tap-mask {
  overflow: hidden;
  @include tapMask;
}
.ofh {
  overflow: hidden;
}
.btn-ctrl {
  width: 88rpx;
  height: 88rpx;
  border-radius: 12rpx;
  background-color: #ebfbf0;
  background-repeat: no-repeat;
  background-size: 36rpx;
  background-position: center;
  &.prev {
    background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/ctrl_icon_1.png');
  }
  &.next {
    background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/ctrl_icon_3.png');
  }
  &.play {
    background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/ctrl_icon_2.png');
  }
  &.stop {
    background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/ctrl_icon_4.png');
  }
}
</style>

