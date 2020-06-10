<template>
    <div id="myMsg">
        <!-- 留言列表 -->
        <div id="myMsg">
            <div style="border:1px solid;margin-top:3px;" v-for="(item,index) in list" :key="index">
                <h4>我的评论：{{item.content}}</h4>
                <h4>{{item.time}}</h4>
                <div style="width:100%;text-align:center">
                 <van-button id="del" size="small" round type="info" @click="delMsg(item.mId)">删除</van-button>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div id="publish">
        <van-cell-group>
          <van-field v-model="content" center clearable  placeholder="请输入文字">
            <van-button slot="button" size="small" type="primary"  @click="addMsg()">发表</van-button>
          </van-field>
        </van-cell-group>
        </div>
    </div>
    
</template>
<script type='text/ecmascript-6'>
import axios from 'axios'
export default{
    data(){
        return{
            content:'',
            time:'',
            uId:'',
            uName:'',
            mId:'',
            list:[]
        }
    },
    mounted:function(){
        var uId = window.sessionStorage.getItem('userId');
        this.uId = uId;
        var uName = window.sessionStorage.getItem('uName');
        this.uName = uName;
        console.log(this.uName);
        var date = new Date();
        var time = date.getFullYear().toString() + "/" + 
        parseInt(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getHours() + ':' + 
        date.getMinutes() + ':' + date.getSeconds() + "";
        this.time = time;
        this.getMyMsg();
        // console.log(time);
    },
    methods:{
        getMyMsg(){
            var uId = window.sessionStorage.getItem('userId');
            axios.post("/api/myMsg",
                {uId: uId}
            ).then((result)=>{
                var res = result.data;
                // console.log(res);
                for(var key in res){
                    params:{this.list = res;}
                    
                }
                // console.log(this.list)
            }
            )
        },
        //添加留言
        addMsg(){
            axios.post("/api/addMsg",{
                content: this.content,
                time: this.time,
                uId: this.uId,
                uName: this.uName
            }).then((result)=>{
                console.log(result);
            }).catch(err=>{})
            //刷新列表
             this.getMyMsg();
        },
        //删除留言 传留言mId是否于当前登录用户匹配
        delMsg(mId){
            console.log(mId);
            axios.post('/api/delMsg',{
                mId,
                uId: this.uId,
            }).then((result)=>{
            }).catch(err=>{
            })
            //刷新列表
            this.getMyMsg();
        }
        
    }
}
</script>
<style type="text/css">
    #publish{
        position: fixed;
        bottom: 65px;
        width: 100%;
    }
    #myMsg{
        margin-bottom:115px; 
    }
</style>