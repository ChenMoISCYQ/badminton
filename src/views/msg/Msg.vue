<template>
    <div id="msg">
        <van-tabs id="msg-tabs" >
          <van-tab title="推荐" to='/msg/msgRecommend'></van-tab>
          <van-tab title="我的留言" to='/msg/myMsg'></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>
<script type='text/ecmascript-6'>

export default {
    methods:{
        data(){
            return {
                
            }
        }
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    #msg-tabs
        z-index 0
</style>
