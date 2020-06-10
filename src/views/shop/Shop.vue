<template>
    <div id="shop">
        <!-- 搜索框 -->
        <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <!-- 商城的tab标签-->
        <div id="shopbar">
          <!-- 循环遍历热门新闻列表 -->
        <!-- <ul class="list-inline">
          <li v-for="(item,index) in items" :key="index" 
          class="list-inline-item">
          <a href="#/shop/main">{{item.labe}}</a></li>
        </ul> -->

        <!-- 向上滚动黏在顶部 -->
        <van-sticky>
        <van-tabs v-model="selectId">
          <van-tab v-for="(item,index) in items" :key="index" :title="item.labe" :to="item.path">
          </van-tab>
        </van-tabs>
        <!-- <ul :v-model="selectId" class="list-inline">
            <li class="list-inline-item" 
            v-for="(item,index) in items" :key="index" 
            @click="switchTo(item.path)">{{item.labe}}</li>
        </ul> -->
        </van-sticky>
        </div>
       
        <!-- 内容 -->
        <div id="body">
          <router-view></router-view>
        </div>
        <!-- 底部版权信息 -->
        <div id="shopFooter">
          footer
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
// import ShopBar from "../../components/tabbar/ShopBar"
export default{
    data(){
        return {
            value: "",
            items:[
                {labe:"热门",path:"/shop/main"},
                {labe:"羽毛球",path:"/shop/ball"},
                {labe:"羽毛球拍",path:"/shop/ball"},
                {labe:"羽毛球鞋",path:"/shop/ball"},
                {labe:"羽毛球手胶",path:"/shop/ball"},
                {labe:"1",path:"/shop/ball"},
                {labe:"羽毛球手胶",path:"/shop/ball"},
                {labe:"3",path:"/shop/ball"},
                {labe:"4",path:"/shop/ball"}
            ],
            selectId:0
            
            
        }
      
    },
    components:{
        // shopbar:ShopBar
    },
    methods:{
        onSearch(){
        },
        switchTo(path){
          // 切换路由
          this.$router.replace(path);
      }
        
    }
}
</script>
<style type="text/css">
#shopbar{
      background: red;
      height: 40px;
      widows: 100%;
    }
    #shopbar .list-inline{
      overflow-x: auto;  /* 设置x轴可滑动 */
      overflow-y: hidden;
      white-space: nowrap; /* 元素不换行 */
      width: auto;
      margin: 0 10px 0 10px;
      
    }
    #shopbar .list-inline .list-inline-item { 
      text-decoration: none;
      display: inline-block;
      background: red;
      background-size: 120px 80px;
      /* margin: 10px 1px 10px 1px; */
      color: #fff;
      font-size: 1em;
      line-height: 40px;
    }
    #shopbar .list-inline .list-inline-item:hover{ 
      display: inline-block;
      font-size: 1.2em;
      font-weight: bold;
    }
    #adImg{
      width: 50px;
      height: 50px;
    }
    #body{
      
      width: 100%;
      background:pink;
    }
    #shopFooter{
      background:gray;
      height: 150px;
      width: 100%;
      margin-bottom: 65px;
    }
   
</style>