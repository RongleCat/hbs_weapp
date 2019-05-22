<template>
  <div class="page-container">
    <div class="content-block">
      <div class="item">
        <div class="head">我的身份</div>
        <div class="body role-select">
          <div class="role-item role-1" @tap="roleIndex = 0" :class="[roleIndex === 0?'active':'']">
            <div class="role"></div>
            爸爸
          </div>
          <div class="role-item role-2" @tap="roleIndex = 1" :class="[roleIndex === 1?'active':'']">
            <div class="role"></div>
            妈妈
          </div>
          <div class="role-item role-3" @tap="roleIndex = 2" :class="[roleIndex === 2?'active':'']">
            <div class="role"></div>
            孩子
          </div>
        </div>
      </div>
      <div class="item">
        <div class="head">选择孩子</div>
        <div class="body tag-select">
          <div class="tag-item" @tap="childIndex = 0" :class="[childIndex === 0?'active':'']">曹吉帅</div>
          <div class="tag-item" @tap="childIndex = 1" :class="[childIndex === 1?'active':'']">曹吉美</div>
        </div>
      </div>
      <div class="item">
        <div class="head">咨询类型</div>
        <div class="body tag-select">
          <div class="tag-item" v-for="(i,index) in typeList" :key="index" @tap="typeIndex = index"
            :class="[typeIndex === index?'active':'']">{{i}}</div>
        </div>
      </div>
    </div>
    <div class="content-block mome">
      <div class="head">补充内容</div>
      <div class="body">
        <textarea placeholder="请简要描述孩子情况" maxlength="-1"></textarea>
      </div>
    </div>
    <div class="btn-box">
      <div class="common-btn radius btn-submit">问问专家</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleIndex: 0,
      childIndex: 0,
      typeIndex: 0,
      typeList: [
        '亲子关系问题',
        '厌学问题',
        '行为问题',
        '注意缺陷多动问题',
        '家庭教育问题',
        '学习问题',
        '人际关系',
        '情绪压力'
      ]
    }
  },
  methdos: {}
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
  padding: 0 25rpx;
  padding-top: 25rpx;
  padding-bottom: 65rpx;
  font-size: 24rpx;
}
.content-block {
  .item {
    border-bottom: 1rpx solid #e5e5e5;
    &:last-child {
      border-bottom: 0;
    }
  }
}
.role-select {
  display: flex;
  .role-item {
    width: 100rpx;
    margin-right: 50rpx;
    font-size: 24rpx;
    text-align: center;
    line-height: 40rpx;
    color: #999;
    .role {
      width: 100rpx;
      height: 100rpx;
      margin-bottom: 15rpx;
      border: 2rpx solid #e5e5e5;
      border-radius: 50%;
      background-color: #fcfcfc;
      background-size: 70rpx;
      background-position: center,-170rpx;
      background-repeat: no-repeat;
    }
    @for $i from 1 through 3 {
      &.role-#{$i} .role {
        background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/inquiry_icon_#{$i}.png'),url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/inquiry_icon_#{$i}_active.png');
      }
      &.active.role-#{$i} .role {
        background-image: url('https://hbs-static.oss-cn-hangzhou.aliyuncs.com/images/icon/inquiry_icon_#{$i}_active.png');
      }
    }
    &.active {
      color: $main;
      .role {
        background-color: #ebfaf0;
        border-color: $main;
      }
    }
  }
}
.btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  .btn-submit {
    width: 230rpx;
  }
}
.tag-select {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10rpx;
  .tag-item {
    flex-shrink: 1;
    padding: 22rpx 33rpx;
    border: 2rpx solid #e5e5e5;
    border-radius: 40rpx;
    margin: 0 20rpx 20rpx 0;
    line-height: 1;
    background: #fcfcfc;
    color: #999;
    &.active {
      color: $main;
      background-color: #ebfaf0;
      border-color: $main;
    }
  }
}
.mome {
  .head {
    border-bottom: 1rpx solid #e5e5e5;
  }
  .body {
    padding-top: 30rpx;
  }
  textarea {
    height: 250rpx;
  }
}
</style>