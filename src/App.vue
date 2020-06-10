<template>
  <div id="app">
    <div class="content">
      <topBar v-show="$route.meta.showTopTabBar"></topBar>
      <mainBar v-show="$route.meta.showMainTabBar" ></mainBar>
       <router-view></router-view>
      <tabBar v-show="$route.meta.showBottomTabBar"></tabBar>
    </div>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TopBar from './components/tabbar/TopBar'
import MainBar from './components/tabbar/MainBar'

 export default {
    name: "App",
    components:{
      TabBar,
      TopBar,
      MainBar
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  .tab
    height 50px
    width 100%
    display flex
    background-color green
    .tab-item
      display inline-block
      height 50px
      line-height 50px
      vertical-align top
      .search
          margin-right 10px
    .tab-main  
      flex 1
      text-align center
      
        

</style>
