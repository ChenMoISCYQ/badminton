<template>
    <div id="teach">
      <div class="list-content" id="list-content" style="margin-top:50px;">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" >
            <div class="list-item" >
              <van-cell v-for="(item,index) in list" :key="index" @click="onClickTeachItem(item)">
                      <div id="teach-main">
                          <div id="teach-main-left">
                              <div id="teach-main-left-content">
                                  <p>{{item.title}}</p>
                                  <p>日期<span>{{item.time}}</span></p>
                              </div>
                          </div>
                          <div id="teach-main-right">
                              <img :src='item.purl' style="height:80px;width:100%">
                          </div>
                      </div>
              </van-cell>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
      <div style="height:65px"></div>
    </div>
</template>
<script type='text/ecmascript-6'>
import '.././../../node_modules/vant/lib/index.css'
import { List } from 'vant';
import axios from 'axios'
export default {
        data(){
            return {
                list: [],
                teachsList:[],
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                isLoading: false,   //是否处于下拉刷新状态
            }
        },
        mounted:function(){
            this.getList();
        }
        ,
        methods:{
            getList(){
                axios.get("/api/teachs").then((result) => {
                    var res = result.data;
                    var items = res.data[0].items;
                    for (var i in items) {
                      this.teachsList = items;
                    }
                    // console.log(items)
                  })
            },
            onLoad() {      //上拉加载
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.teachsList[i]);
                    }
                    // console.log(this.list)
                    this.loading = false;
                    if (this.list.length >= 60) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onRefresh() {       //下拉刷新
                setTimeout(() => {
                    this.finished = false;
                    this.isLoading = false;
                    this.list = []
                    this.onLoad()
                }, 500);
            },
            //点击跳转到详情页
             onClickTeachItem(item) {
               // console.log("item"+item);
               this.$router.push({
                 name: "teachmain",
                 params: {
                   data: item
                 }
               });
             }
        }
    }
</script>
<style type="text/css">
    #teach-main{
        height: 100px;
        width: 100%;
        /* background: lightpink; */
        padding-top:10px; 
        background: gray;
    }
    #teach-main #teach-main-left{
        width: 65%;
        height: 80px;
        float: left;
        /* background: limegreen; */
        background: gray;
    }
    #teach-main #teach-main-right{
        width: 33%;
        height: 80px;
        float: right;
        background: gray;
        /* background: lightsalmon; */
    }
</style>