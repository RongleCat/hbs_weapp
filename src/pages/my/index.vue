<template>
  <div class="test">
    {{title}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '111'
    }
  },
  onLoad() {
    wx.navigateTo({
      url: `/pages/login/main`
    })
  }
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 80rpx;
}
</style>