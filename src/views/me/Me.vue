<template>
    <div style="text-align:center" id="me">
        <van-image round width="10rem" height="10rem" :src="hImg" />
        <div>
            <p><span>姓名：</span>{{uName}}</p>
            <p><span>年龄：</span>{{uAge}}</p>
            <p><span>手机号：</span>{{uPhone}}</p>
            <p><span>邮箱：</span>{{uEmail}}</p>
            <p><span>地址：</span>{{uAddress}}</p>
        </div>
        <van-button class="van-button" type="primary" size="large" @click="prefer">完善信息</van-button>
        <van-button class="van-button" type="primary" size="large" @click="logout">退出账户</van-button>
    </div>
</template>
<script type='text/ecmascript-6'>
import axios from 'axios'
export default{
    data(){
        return{
            hImg:"",
            sess:"",
            uId:"",
            uName: "",
            uPhone: "",
            uAge:"",
            uEmail:"",
            uAddress:"",
            uImg:""
        }
    },
    mounted:function(){
       this.getUser();
       
    },
    // 数据更新
    updated:function(){
        // alert(this.uImg);
        if(this.uImg == null){
            this.hImg = "../../../static/img/dHead.png";
        }else{
            this.hImg = this.uImg; 
        }
    } 
    ,
    methods:{
        // 获取用户信息
        getUser(){
            // 判断用户是否登录
            // 如果登录显示用户信息
            // 如果未登录跳转到登录注册页面
            var uId = window.sessionStorage.getItem('userId');
            if(uId != null){
                // console.log(window.sessionStorage);
                axios.post("/api/user",{
                    uId:uId
                }).then( response => {
                var res = response.data;
                // console.log(res);
                this.uId = res[0].uId;
                this.uName = res[0].uName;
                this.uPhone = res[0].uPhone;
                this.uAge = res[0].uAge;
                this.uEmail = res[0].uEmail;
                this.uAddress = res[0].uAddress;
                this.uImg = res[0].uImg;
            }).catch( err => {
                console.log(err)
            });

            }else{
                alert('未登录');
                this.$router.push({
                    path: '/choose'
                })
            }
            // this.sess = sessionStorage.getItem(2);
            
        },
        // 完善信息
        prefer(){
            this.$router.push({
                    path: '/me/prefer'
                })
        },
        // 用户注销账号
        logout(){
            window.sessionStorage.removeItem('userId');
            alert("退出成功");
            setTimeout(function(){
                location.href="/home";
             },1000)
        }
    }

}
</script>
<style lang='stylus' rel="stylesheet/stylus">
    #me 
        margin-top 50px
        .van-button
            margin-top 10px;
</style>