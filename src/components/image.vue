<template>
  <image :src="srcFormat" mode="aspectFill" class="image" :class="[radius?'radius':'']" />
</template>

<script>
export default {
  props: ['src', 'radius'],
  computed: {
    srcFormat() {
      let { src } = this
      if (!src.length) {
        return 'http://192.168.3.5/project/xxgy/Public/Images/front/index_img/icon_jiaose_jiazhang@3x.png'
      }
      if (src.indexOf('http') !== -1) {
        return src.replace(/^http*:\/\/p31cjs66j.bkt.clouddn.com/, 'http://i5img.61xinchen.com')
      }else if(src.indexOf('i5img.61xinchen.com') !== -1){
        return src
      } else {
        return 'http://192.168.3.5/project/xxgy' + src
      }
    }
  }
}
</script>
<style lang="scss">
.image {
  width: 100%;
  height: 100%;
  &.radius {
    border-radius: 50%;
  }
}
</style>
