<template>
  <div class="bottom-tab">
    <div class="tab-item" @click="switchTo('/home')">
      <img :src="$route.path.includes('/home') ? tabBarImgArr[0].selected: tabBarImgArr[0].normal" alt="">
      <span :class="{on: $route.path.includes('/home')}">首页</span>
    </div>
    <div class="tab-item" @click="switchTo('/teach')">
      <img :src="$route.path.includes('/teach') ? tabBarImgArr[1].selected: tabBarImgArr[1].normal" alt="">
      <span :class="{on: $route.path.includes('/teach')}">教学</span>
    </div>
    <div class="tab-item" @click="switchTo('/shop')">
      <img :src="$route.path.includes('/shop') ? tabBarImgArr[2].selected: tabBarImgArr[2].normal" alt="">
      <span :class="{on: $route.path.includes('/shop')}">商城</span>
    </div>
    <div class="tab-item" @click="switchTo('/msg')">
      <img :src="$route.path.includes('/msg') ? tabBarImgArr[3].selected: tabBarImgArr[3].normal" alt="">
      <span :class="{on: $route.path.includes('/msg')}">留言</span>
    </div>
    <div class="tab-item" @click="switchTo('/me')">
      <img :src="$route.path.includes('/me') ? tabBarImgArr[4].selected: tabBarImgArr[4].normal" alt="">
      <span :class="{on: $route.path.includes('/me')}">我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabBar",
    data(){
      return {
        tabBarImgArr: [
          {normal: require('./../../../common/img/home.png'), selected: require('./../../../common/img/home_selected.png')},
          {normal: require('./../../../common/img/play.png'), selected: require('./../../../common/img/play_selected.png')},
          {normal: require('./../../../common/img/shop.png'), selected: require('./../../../common/img/shop_selected.png')},
          {normal: require('./../../../common/img/chat.png'), selected: require('./../../../common/img/chat_selected.png')},
          {normal: require('./../../../common/img/mine.png'), selected: require('./../../../common/img/mine_selected.png')}
        ]
      }
    },
    methods: {
      switchTo(path){
          // 切换路由
          this.$router.replace(path);
      }
    }
  }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .bottom-tab
      width 100%
      height 65px
      background-color #fff
      position fixed
      left 0
      bottom 0px
      z-index 999
      box-shadow 0 -0.3rem 1rem #ccc
      display flex
      .tab-item
        display flex
        flex 1
        flex-direction column
        justify-content center
        align-items center
        font-size 2rem
        img
          width 35%
          margin-bottom 0.3rem
        .on
          color red
</style>
