<template>
    <div id="home">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-bind:src="image" style="width: 100%;height: 200px;"/>
          <!-- {{image}} -->
        </van-swipe-item>
      </van-swipe>

      <!-- 公告 -->
      <div>
      <van-notice-bar text="热门资讯快来看啊"
      left-icon="volume-o"
      :scrollable="true"
      />
      </div>
      <!-- 热门资讯 -->
      <div id="hot-news">
        <ul class="list-inline"  >
          <!-- 循环遍历热门新闻列表 -->
          <li v-for="(item,index) in hotNewsList" :key="index" 
          @click="onClickHotNewItem(item)"
          class="list-inline-item" 
          >
          <a :style="'background-image: url('+item.purl+');'"></a></li>
        </ul>
      </div>
      <!-- 主要内容 -->
      <div id="homeMain">
        <h3 id="newTitle">新闻</h3>
       <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
         <van-cell v-for="(item,index) in list" :key="index">
                      <div id="teach-main"  @click="onClickNewItem(item)">
                          <div id="teach-main-left">
                              <div id="teach-main-left-content">
                                  <p>{{item.title}}</p>
                                  <p>日期<span>{{item.time}}</span></p>
                              </div>
                          </div>
                          <div id="teach-main-right">
                              <!-- 图片{{item}} -->
                              <img :src='item.purl' style="height:80px;width:100%">
                          </div>
                      </div>
         </van-cell>
       </van-list>
      </div>
     <!--  <div style="height:65px"></div> -->

    </div>

</template>
<script type='text/ecmascript-6'>
import InlineList from "../../components/list/InlineList"
import { Icon } from 'vant'
// 引入通知栏
import { NoticeBar } from 'vant'
import axios from 'axios'

export default {
  components: {
    inlinelist: InlineList
  },
  data() {
    return{
      msg: "hello",
      list: [],
      loading: false,
      finished: false,
      hotNewsList:{},
      newsList:{},
      // 路径要先导入
      // 轮播图片
      images: [
        require('../../../images/main1.jpg'),
        require('../../../images/main2.jpg'),
        require('../../../images/main3.jpg'),
        require('../../../images/main4.jpg'),
        require('../../../images/main5.jpg'),
      ]
      // data:{}
    }
  },
  // 已完成模板已经渲染
  mounted: function () {
      // this.getList();
      this.getHotNewImgs();
      this.getList();
  },
  
  methods:{
    //获取热门新闻
    getHotNewImgs(){
      axios.get("http://localhost:3000/api/hotnews").then((result)=>{
        var res = result.data;
        var items = res.data[0].items;
        // console.log(res);
        // console.log(items);
        for(var key in items){
          this.hotNewsList = items;
        }
        // console.log(this.hotNewsList);
      })
    },
    // 点击热门新闻单项跳转页面
    onClickHotNewItem(item){
      // console.log("item"+item);
        this.$router.push({
          name: "homehot",
          params: {
            id:item.pid,
            data:item
          }
        });
    }, 
    getList(){
      axios.get("/api/news")
      .then((result)=>{
        var res = result.data;
        var items = res.data[0].items;
        for(var i in items){
          this.newsList = items;
        }
      })
    },
     onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (var i = 0; i < 10 ; i++) {
          this.list.push(this.newsList[i]);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
        // console.log(this.list)
      }, 500);
    },
    //点击进入新闻详情页面
    onClickNewItem(item){
      this.$router.push({
        name:"homemain",
        params:{
          data:item
        }
      })
    }
    
  }

}
</script>

<style type="text/css">
    
    #home #hot-news{
      height: 100px;
      /* background: lightgreen; */
      background: gray;
      
    }
    #homeMain{
      margin-bottom: 65px; 
    }
    #newTitle{
      margin-left: 20px; 
    }
    #home #hot-news .list-inline{
      overflow-x: auto;  /* 设置x轴可滑动 */
      overflow-y: hidden;
      white-space: nowrap; /* 元素不换行 */
      width: auto;
      height: 100px;
      margin: 0 10px 0 10px;
      
    }
    #home #hot-news .list-inline .list-inline-item a{ 
      display: inline-block;
      height: 80px;
      width: 120px;
      line-height: 80px;
      background: pink;
      background-size: 120px 80px;
      margin: 10px 5px 10px 5px;
    }
    #teach-main{
        height: 100px;
        width: 100%;
        /* background: limegreen; */
        background: gray;
        padding-top:10px; 
        
    }
    #teach-main #teach-main-left{
        width: 65%;
        height: 80px;
        float: left;
        /* background: limegreen; */
        
    }
    #teach-main #teach-main-right{
        width: 33%;
        height: 80px;
        float: right;
        /* background: lightsalmon; */
    }

</style>
