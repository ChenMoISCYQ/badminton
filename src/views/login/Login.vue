<template>
    <div id="login">
        <van-cell-group>
          <van-field v-model="userName" label="用户名" placeholder="请输入用户名" />
          <!-- <van-field v-model="userPhone" label="手机号" placeholder="请输入手机号"  /> -->
           <van-field v-model="userPass" type="password" label="密码" placeholder="密码" />
        </van-cell-group>
        <!-- <van-cell-group>
          <van-field v-model="userSms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group> -->
        <van-button type="primary" size="large" @click="login">登录</van-button>
        <van-button type="primary" size="large" @click="register">注册</van-button>
    </div>
</template>
<script type='text/ecmascript-6'>
    import axios from 'axios'
    export default {
        data() {
            return {
                userId: "",
                userName: "",
                userPass: "",
                userPhone: "",
                userSms: ""
            }
        },
        methods: {
            /* login() {
                axios.get("/api/userLogin").then(response => {
                    var res = response.data.data;
                    console.log(res);
                    var userIdArr = [];
                    var userNameArr = [];
                    var userPassArr = [];
                    // 获取session
                    var sess = window.sessionStorage;
                    for (var i = 0; i < res.length; i++){
                        userIdArr.push(res[i].id);
                        userNameArr.push(res[i].username);
                        userPassArr.push(res[i].password);
                    }
                    
                    // 验证用户名是否匹配
                    if (userNameArr.indexOf(this.userName) === -1){
                        alert('用户不存在')
                    }else{
                        // 用户密码是否匹配
                        // 获取用户下标
                        var index = userNameArr.indexOf(this.userName);
                        console.log(index);
                        // 验证密码
                        if(userPassArr[index] === this.userPass){
                            // 用户密码正确 用户id和token放入session
                            sess.setItem("userid",res[index].id);    
                            // 验证成功进入首页
                            this.$router.push('/home');
                            console.log("登录成功");
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            }, */
            login() {
                axios.post("/api/userLogin",{
                    uName: this.userName,
                    uPass: this.userPass
                }).then(response => {
                    var res = response.data;
                    /* 
                       res = -1 用户不存在
                       res = 0 用户存在密码错误
                     */
                    if(res == -1){
                        alert("用户不存在");
                    }if(res == 0){
                        alert("密码错误");
                    }else{
                        // console.log(res);
                        // 获取session
                        var sess = window.sessionStorage;
                        sess.setItem("userId",res[0].uId);
                        sess.setItem("uName",res[0].uName);
                        this.$router.push('/home');
                         console.log("登录成功");
                    }
                }).catch(err => {

                })
            },
            register() {
                if (this.userName == "" || this.userPass == "") {
                  alert("请输入用户名或密码");
                }else{
                    var data = {'uName':this.userName,'uPassword':this.userPass};
                    axios.post("/api/userRegister",{
                        uName:this.userName,
                        uPass:this.userPass
                    }).then(response =>{
                        console.log(response);
                        if(response.data == -1){
                            alert("账户已存在")
                        }else if(response.data == 200){
                            alert("注册成功")
                        }
                    }).catch(err => {

                })
                }
            }
        }
    }
    
</script>
<style type="text/css">
    #login{
        margin-top: 50%;
    }
</style>