<template>
    <div id="chooseLogin">
        <van-button id="chooseButton" type="primary" size="large" @click="choose">用户名密码登录</van-button>
    </div>
</template>
<script type='text/ecmascript-6'>
export default{
    data(){
        return{ 
        }
    },
    methods:{
        choose(){
            this.$router.push({
                path:'/login'
            })
        }
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">

   #chooseButton
        margin-top 250px;
        
</style>