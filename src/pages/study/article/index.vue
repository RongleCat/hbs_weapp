<template>
  <div class="page-container">
    <div class="item" @tap="nTo('/study/article_detail',{id:1})" v-for="i in 10" :key="i">
      <div class="read-info">
        <div class="title">别再说孩子笨了，孩子会越来越笨的</div>
        <div class="more">男孩子从五年级开始爱上手机游戏上瘾，脾气越来越暴躁，越来越厌学，手机不给玩就不想去上学</div>
        <div class="info">
          <div class="left"><span class="iconfont icon-see"></span> 188</div>
          <div class="right">2019-05-13</div>
        </div>
      </div>
      <img src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png">
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
  font-size: 24rpx;
  .item {
    @include tapMask;
    padding: 30rpx;
    display: flex;
    background: #fff;
    border-radius: 20rpx;
    margin-bottom: 25rpx;
    .read-info {
      flex: 1;
      padding-right: 20rpx;
      .title {
        width: 100%;
        color: #333;
        font-size: 26rpx;
        line-height: 1;
        padding-bottom: 20rpx;
      }
      .more {
        color: #999;
        font-size: 24rpx;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .info {
        display: flex;
        justify-content: space-between;
        padding-top: 20rpx;
        line-height: 1;
        .iconfont {
          font-size: 24rpx;
        }
        .right {
          color: #999;
        }
      }
    }
    img {
      width: 200rpx;
      height: 120rpx;
      flex-shrink: 1;
      border-radius: 10rpx;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
}
</style>