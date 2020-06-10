<template>
    <div class="main-top-tap" >
        <van-nav-bar class="main-bar" title="详情"
        name="certificate" 
        left-text="返回"
        fixed
        left-arrow
         @click-left="onClickLeft">
        </van-nav-bar>
    </div>
</template>
<script type='text/ecmascript-6'>
export default{
    methods:{
     onClickLeft() {
     this.$router.go(-1);
     },
     onClickRight() {
     alert('right');
     }
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    .main-top-tap
        margin-bottom 45px
</style>