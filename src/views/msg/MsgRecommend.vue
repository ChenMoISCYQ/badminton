<template>
    <div id="msg_recommend" >
         <div id="msg_content" v-for="(item,index) in list" :key="index">
             <!-- 内容 -->
             <img id="content-head" :src="item.uImg" alt="">
             <div style="display:inline-block">
                <span>评论：{{item.content}}</span>
                    <!-- 时间 -->
                <div>发表时间：{{item.time}}</div>
             </div>
             <!-- 用户 -->
             <div id="msg_uName">{{item.uName}}</div>
            
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
import axios from 'axios'
export default{
    data(){
        return{
            list:[],
            show: false
        }
    },
    mounted:function(){
        this.getMsg();
    },
    methods:{
        getMsg(){
            axios.get("/api/msg").then((result)=>{
                var res = result.data;
                // console.log(res);
                for(var key in res){
                    this.list = res;
                }
                // console.log(this.list)
            }
            )
        }
    }
}
</script>
<style type="text/css">
    #msg_recommend{
        margin-bottom: 65px;
    }
    #msg_content{
        background: #cccccc;
        margin: 5px;
        width: 100%;
        height: 80px;
    }
    #content-head{
        width: 60px;
        height: 60px;
        margin: 10px;
    }
    #msg_uName{
        /* display: inline-block; */
        float: right;
        margin-top:20px; 
        margin-right:10px; 
        font-size: 1.2em;
    }
</style>