<template>
    <div id="shopMain">
        <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-bind:src="image" style="width: 100%;height: 180px;"/>
          <!-- {{image}} -->
        </van-swipe-item>
      </van-swipe>
         <!-- 广告 -->
        <van-grid :column-num="5">
          <van-grid-item v-for="(item,index) in goods_icon" :key=index >
            <img :src="item.imgurl"  id="adImg">
            <div>{{item.good_text}}</div>
         </van-grid-item>
        </van-grid>
         <!-- <van-list id="shopMain" v-model="loading" :finished="finished" finished-text="没有更多了">
           <van-cell id="shopMainItem" v-for="item in list" :key="item" :title="item" />
         </van-list> -->
         <!-- 商品 -->
         <!-- 热销商品 -->
         <h3>热销</h3>
         <van-grid :column-num="3" :gutter="10">
          <van-grid-item v-for="(item,index) in goods_icon" :key=index style="height:150px">
            <img :src="item.imgurl"  id="adImg">
            <div>{{item.good_text}}</div>
         </van-grid-item>
        </van-grid>
        <!-- 热销商品 -->
         <h3>人气推荐</h3>
         <van-grid :column-num="3" :gutter="10">
          <van-grid-item v-for="(item,index) in goods_icon" :key='index' style="height:150px">
            <img :src="item.imgurl"  id="adImg">
            <div>{{item.good_text}}</div>
         </van-grid-item>
        </van-grid>

    </div>
</template>
<script type='text/ecmascript-6'>
export default{
    data(){
        return{
            items:[
                {labe:"商品1"},
                {labe:"商品2"},
                {labe:"商品3"},
                {labe:"商品4"},
                {labe:"商品5"},
                {labe:"商品6"},
                {labe:"商品7"},
                {labe:"商品8"}
            ],
            goods_icon:[
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              },
              {
                imgurl:require('../../../static/img/newgood.png'),
                good_text:"新品首发"
              }

            ],
            images: [
              require('../../../images/main1.jpg'),
              require('../../../images/main2.jpg'),
              require('../../../images/main3.jpg'),
              require('../../../images/main4.jpg'),
              require('../../../images/main5.jpg'),
            ],
            list: [],
            loading: false,
            finished: false
        }
    },
    methods:{
        /* onLoad(){
            setTimeout(()=>{
                // 每次加载十个
                for(var i = 0 ; i < this.items.length ; i++){
                    this.list.push(this.items[i].labe);
                };
                //正在加载加载
                this.loading = false;
                // 加载完成
                if(this.list.length >= this.items.length){
                    this.finished = true;
                }
            },1000)
        } */
    }
}
</script>
<style type="text/css">
    /* #shopMain {
        margin-bottom: 200px;
    } */
    #shopMain>#shopMainItem{
        display: inline-block;
        width: 49%;
        height: 100px;
    }
</style>