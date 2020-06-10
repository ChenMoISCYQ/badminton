<template>
    <div id="shopbar">
        <ul class="list-inline"  >
          <!-- 循环遍历热门新闻列表 -->
          <li v-for="(item,index) in items" :key="index" 
          class="list-inline-item" >
          <a href="#">{{item.labe}}</a></li>
        </ul>
    </div>
</template>
<script type='text/ecmascript-6'>
export default{
    name: "shopbar",
    data(){
        return{
            items:[
                {labe:"热门"},
                {labe:"羽毛球"},
                {labe:"羽毛球拍"},
                {labe:"羽毛球鞋"},
                {labe:"热门"},
                {labe:"羽毛球"},
                {labe:"羽毛球拍"},
                {labe:"羽毛球鞋"}
            ]
        }
    }

}
</script>
<style type="text/css">
    #shopbar{
      background: red;
      height: 40px;
    }
    #shopbar .list-inline{
      overflow-x: auto;  /* 设置x轴可滑动 */
      overflow-y: hidden;
      white-space: nowrap; /* 元素不换行 */
      width: auto;
      margin: 0 10px 0 10px;
      
    }
    #shopbar .list-inline .list-inline-item a{ 
      text-decoration: none;
      display: inline-block;
      background: red;
      background-size: 120px 80px;
      /* margin: 10px 1px 10px 1px; */
      color: #fff;
      font-size: 1em;
      line-height: 40px;
    }
    #shopbar .list-inline .list-inline-item a:hover{ 
      display: inline-block;
      font-size: 1.2em;
      font-weight: bold;
    }
</style>