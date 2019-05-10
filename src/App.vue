<script>
export default {
  
}
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

.common-btn {
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  font-size: 30rpx;
  color: #fff;
  background: rgb(0, 209, 101);
  border-radius: 10rpx;
  border: 0;
}

.c-tag {
  display: inline-block;
  color: #00d164;
  background: rgb(235, 251, 240);
  line-height: 1.5;
  padding: 0 12rpx;
  border-radius: 15rpx;
  font-size: 22rpx;
}
</style>
