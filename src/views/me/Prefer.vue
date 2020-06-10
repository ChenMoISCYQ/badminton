<template>
    <div id="prefer">
        <div>
        <div>
           <img :src="dImg" alt="" @click="changHead()" style="height:80px;width:80px">
        </div>
        <van-popup  v-model="show" :style="{width: '100%',height:'50%'}">
            <van-grid :column-num="3" :gutter="10">
              <van-grid-item v-for="(item,index) in hList" :key=index style="height:150px" id="hItem" @click="selectHead(item.hurl)">
                <img :src="item.hurl" style="height:80px;width:80px">
                <div>{{item.id}}</div>
              </van-grid-item>
            </van-grid>
            
        </van-popup>
        <van-cell-group>
          <van-field class="van-field" v-model="userAge" label="年龄" placeholder="年龄" />
          <van-field class="van-field" v-model="userPhone" label="手机号" placeholder="请输入手机号" />
          <van-field class="van-field" v-model="userEmail" label="邮箱" placeholder="请输入邮箱" />
          <van-field class="van-field" v-model="userAddress" label="地址" placeholder="请输入地址" />
          <van-button style="margin-top:20px" type="danger" round  size="large" @click="submit">确定提交</van-button>
        </van-cell-group>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
import axios from 'axios'
export default{
     data() {
       return {
           uId:"",
           userName:"",
           userAge:"",
           userPhone:"",
           userEmail:"",
           userAddress:"",
           dImg:"../../../static/img/up_head.png",
           uImg:"",
           show: false,
           hList:[]
     }
  },
  mounted:function(){
      this.getSess();
  },
  methods: {
    //改变头像
    changHead() {
      // 此时可以自行将文件上传至服务器
      console.log('11');
      this.showPopup();
      this.getHeadImg();
    },
    showPopup() {
      this.show = true;
    },
    getSess(){
        var uId = window.sessionStorage.getItem('userId');
        this.uId = uId;
    },
    prefer(){
       axios.post("/api/prefer",{
           uId: this.uId,
           userAge: this.userAge,
           userPhone: this.userPhone,
           userEmail: this.userEmail,
           userAddress: this.userAddress,
           uImg: this.uImg
       }).then(res=>{
       }).catch(err=>{})
    },
    // 提交信息
    submit(){
      this.prefer();
      alert("提交成功");
      this.$router.push({
        path: '/me'
      })
    },
    // 获取头像
    getHeadImg(){
      axios.get("/api/hImg").then(res=>{
        var list = res.data.data;
        // console.log(res.data.data);
        for(var i in list){
          this.hList = list;
        }
        // console.log(this.hList)
        // for(var i in )
      }).catch(err=>{})
    },
    selectHead(hUrl){
      this.dImg = hUrl;
      //关闭弹框
      this.show = false;
      //上传头像
      this.uImg = hUrl;
    }
    
  }
}
</script>
<style type="text/css">
    #prefer {
        text-align: center;
        margin-top: 70px; 

    }
    .van-field{
        margin-top: 10px; 
    }
    #hItem{
        border: 2px;
    }
</style>