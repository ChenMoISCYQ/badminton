// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import '../common/css/reset.css'
import router from './router/index'
import { Lazyload } from 'vant';
//引入视频插件
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'


// 引入axios
// import Axios from 'axios'
//引入vant
import Vant from 'vant'
Vue.config.productionTip = false

// 设置路由
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Lazyload)
Vue.use(VueVideoPlayer)
// Vue.use(Axios)
// 使用Vant
Vue.use(Vant)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // render: h => h(App),
  router
  
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面 title */
  if (to.meta.title) {
    // document.title = to.meta.title
    document.getElementsByClassName('van-nav-bar__title van-ellipsis')[0].innerText = to.meta.title;
  }
  next()
  // document.getElementsByClassName('top-van-nav-bar')[0].title = "aa"
  // console.log(document.getElementsByClassName('top-van-nav-bar'))
  
})
