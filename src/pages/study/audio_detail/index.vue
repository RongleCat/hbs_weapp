<template>
  <div class="page-container">
    <div class="detail-container">
      <div class="top">
        <div class="cover">
          <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/audio_default.png" />
        </div>
        <div class="title">亲少年抑郁情绪（完整版）</div>

      </div>
      <div class="bottom">
        <div class="play-bar">
          <div class="bar">
            <div class="bg" :style="{width:'50%'}">
              <div class="dot">
                <div class="main"></div>
              </div>
            </div>
          </div>
          <div class="time">
            <span>00:00:36</span>
            <span>00:34:00</span>
          </div>
        </div>
        <div class="ctrl">
          <div class="edge">
            <div class="iconfont icon-zan"></div>
            <p>325688</p>
          </div>
          <div class="center">
            <div class="btn-ctrl prev"></div>
            <div class="btn-ctrl play"></div>
            <div class="btn-ctrl next"></div>
          </div>
          <div class="edge">
            <div class="iconfont icon-fenxiang"></div>
            <p>分享</p>
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
  background-image: linear-gradient(to bottom, #00d164, #00d164);
  background-repeat: no-repeat;
  background-size: 100% 170rpx;
  background-position: top center;
  padding: 25rpx;
  padding-bottom: 65rpx;
  display: flex;
}
.detail-container {
  min-height: 100%;
  background: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 65rpx;
  border-radius: 20rpx;
  box-shadow: 0 20rpx 40rpx rgba(#000, 0.05);
  overflow: hidden;
  .cover {
    height: 710rpx;
    width: 100%;
  }
  .top {
    .title {
      text-align: center;
      line-height: 180rpx;
      color: $t3;
      font-size: 36rpx;
    }
  }
  .play-bar {
    width: 100%;
    padding: 0 50rpx;
    margin: 0 auto;
    .bar {
      width: 100%;
      height: 34rpx;
      background: $bg;
      border-radius: 17rpx;
      padding: 12rpx;
      .bg {
        width: 0;
        height: 100%;
        background: #fff;
        border-radius: 17rpx;
        position: relative;
        .dot {
          position: absolute;
          top: -12rpx;
          right: -12rpx;
          width: 34rpx;
          height: 34rpx;
          border-radius: 50%;
          background: rgba($main, 0.3);
          padding: 7rpx;
          .main {
            width: 100%;
            height: 100%;
            background: $main;
            border-radius: 50%;
            border: 2rpx solid #fff;
          }
        }
      }
    }
    .time {
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      line-height: 60rpx;
      color: $t9;
    }
  }
  .bottom {
    .ctrl {
      padding-top: 30rpx;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      // padding: 0 50rpx;
      .edge {
        display: flex;
        flex-direction: column;
        flex: 1;
        font-size: 20rpx;
        line-height: 1.5;
        justify-content: center;
        align-items: center;
        .iconfont {
          @include tapColor;
          width: 56rpx;
          height: 56rpx;
          line-height: 56rpx;
          text-align: center;
          border-radius: 15rpx;
          background: $bg;
          color: $t3;
          font-size: 24rpx;
        }
      }
      .center {
        display: flex;
        width: 374rpx;
        justify-content: space-between;
        .btn-ctrl {
          @include tapColor;
        }
      }
    }
  }
}
</style>