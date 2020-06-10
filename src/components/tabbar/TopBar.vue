<template>
    <div class="main-top-tap" >
        <van-nav-bar class="top-van-nav-bar" 
        title="这是主页"
        name="certificate" 
        fixed
       >
        <img id="top-nav-icon" slot="left" :src='hImg' />
        <!-- <van-icon style="width:50px;height:46px;background:red" slot="left" @click="onClickLeft"/> -->
        <van-icon name="wap-nav" slot="right" @click="onClickRight"/>
        </van-nav-bar>
        <!-- 点击导航栏右侧按钮显示用户信息 -->
        <van-popup v-model="show" 
          position="right" 
          :style="{width: '70%',height:'100%'}"
        >
        <ul>
          <div id="popup-bg" >
            <p>{{uName}}</p>
          </div>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <van-cell v-model='uName' icon="location-o"/>
        </ul>
        </van-popup>
    </div>
</template>
<script type='text/ecmascript-6'>
import { NavBar } from 'vant';
import axios from 'axios'
export default {
  name: "topBar",
  data(){
    return{
      show:false,
      uName:"",
      uImg:"",
      hImg:"../../../static/img/dHead.png",
    }
  },
  mounted:function(){
    this.getUser();
    this.reload = false;
    
  },
  updated:function(){
        // alert(this.uImg);
        if (this.uImg == null) {
          this.hImg = "../../../static/img/dHead.png";
        } else {
          this.hImg = this.uImg;
        }
  },
  methods: {
    // 获取用户信息
        getUser(){
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
                this.uImg = res[0].uImg;  
                console.log(this.uName);
                console.log(this.uImg);  
            }).catch( err => {
                console.log(err)
            });
            }
        },
    onClickLeft() {
      alert('aa')
    },
    //点击右侧按钮
    onClickRight() {
      this.show = true;
      // alert(1)
    }
  }
}
</script>
<style type="text/css">
  #top-nav-icon{
    width: 42px;
    height: 42px;
    border:  black 1px;
    border-radius: 50%;
  }
  #popup-bg{
    height: 120px;
    width: 100%;
    background: greenyellow;
  }
</style>