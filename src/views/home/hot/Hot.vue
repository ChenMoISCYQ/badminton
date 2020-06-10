<template>
    <div id="hot_news">
        <h3 style="text-align:center">{{obj.title}}</h3>
        <img :src="obj.purl" alt="" style="width:100%">
        <h5>{{obj.content}}</h5>

    </div>
</template>
<script type='text/ecmascript-6'>
export default {
    data(){
        return {
            purl:"",
            title:"",
            obj: { }
        };
    },
    mounted:function(){
        this.init();
    },
    methods: {
        // 渲染热门新闻页面
        init() {
          this.obj = this.$route.params.data;
        }
    }
}
</script>
<style type="text/css">
</style>