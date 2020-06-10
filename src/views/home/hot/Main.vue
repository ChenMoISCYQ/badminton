<template>
    <div id="hot_main">
        <h1 >{{obj.title}}</h1>
        <h1>{{obj.title}}</h1>
        <h1>{{obj.time}}</h1>
    </div>
</template>
<script type='text/ecmascript-6'>
export default{
    data(){
        return{
            obj:{}
        }
    },
    mounted:function(){
        this.init();
    },
    methods:{
        init(){
             this.obj = this.$route.params.data;
        }
    }
}
</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>