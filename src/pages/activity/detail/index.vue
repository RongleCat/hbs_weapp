<template>
  <div class="page-container">
    <div class="content-block">
      <div class="img-cover">
        <imageFormat src="https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/head_other.png" />
      </div>
      <div class="head">活动详情</div>
      <div class="body">温州医科大学，应用心理专业，心理咨询方向。多年来从事亲少年心理咨询和辅导工作，积累了丰富的个案经验。温州医科大学，应用心理专业....更多>咨询方向。多年来从事亲少年心理咨询和辅导工作，积累了丰富的个案经验。</div>
    </div>
    <div class="content-block">
      <div class="head">活动信息</div>
      <div class="body">
        <div class="item">
          <div class="label">活动地点</div>
          <div class="text">杭州市滨江区华业大厦</div>
        </div>
        <div class="item">
          <div class="label">活动时间</div>
          <div class="text">2019-05-16 星期四 8:30</div>
        </div>
        <div class="item">
          <div class="label">活动费用</div>
          <div class="text color">50元/位</div>
        </div>
        <div class="common-btn">立即报名</div>
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
}
.content-block {
  box-shadow: 0 20rpx 40rpx rgba(#000, 0.05);
  .img-cover {
    width: 100%;
    height: 320rpx;
  }
  .head {
    border-bottom: 1rpx solid $bc;
  }
  .body {
    padding-top: 30rpx;
    font-size: 26rpx;
    line-height: 1.5;
    .item {
      display: flex;
      line-height: 2;
      .label {
        width: 140rpx;
        color: $t9;
      }
      .text.color {
        color: $main;
      }
    }
    .common-btn {
      width: 500rpx;
      margin: 30rpx auto 30rpx auto;
    }
  }
}
</style>