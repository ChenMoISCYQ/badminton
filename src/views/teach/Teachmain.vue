<template>
    <div id="teach_main">
        <h4>{{obj.title}}</h4>
        <p>{{obj.time}}</p>
        <iframe style="width:100%;height:200px" 
        :src="obj.src" 
        scrolling="no" border="0" frameborder="no" framespacing="0" 
        allowfullscreen="true">
        </iframe>
        <!-- <input type="text" v-model="name"> -->
        <p>{{obj.content}}</p>
    </div>
</template>
<script type='text/ecmascript-6'>
import axios from 'axios'
export default{
    
  data(){
      return{
          obj:{},
          name:"",
          content:"",
          tId:'',
          uName:''

      }
  },
  mounted: function () {
      this.init();
      this.getName();
    },
  methods: {
      init() {
        this.obj = this.$route.params.data;
        console.log(this.obj.time);
      },
      getName(){
          var uName = window.sessionStorage.getItem('uName');
        //this.name = uName;
          // console.log(uName);
      }
    }

}
</script>
<style lang='stylus' rel="stylesheet/stylus">
</style>