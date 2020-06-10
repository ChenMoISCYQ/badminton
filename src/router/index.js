// 1.引用
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
/* 引入一级路由 */

//主页
import Home from './../views/home/Home'
//教学
import Teach from './../views/teach/Teach'
//商城
import Shop from './../views/shop/Shop'
//留言
import Msg from './../views/msg/Msg'
//个人中心
import Me from './../views/me/Me'
//登录
import Login from './../views/login/Login'
import Choose from './../views/login/Choose'

/* 引入二级路由 */
import Hot from './../views/home/hot/Hot'
import Main from './../views/home/hot/Main'
import ShopMain from './../views/shop/ShopMain'
import ShopBall from './../views/shop/ShopBall'
import MsgRecommend from './../views/msg/MsgRecommend'
import MyMsg from './../views/msg/MyMsg'
import Teachmain from './../views/teach/Teachmain'
import Prefer from './../views/me/Prefer'

// 2.声明使用
Vue.use(VueRouter);
Vue.use(VueResource);

// 3.输出路由
export default new VueRouter({
    // 配置一级路由
    routes: [
        {path: "/" , redirect: '/home',meta:{title:"这是主页"}},
        {
            path: "/home", 
            component: Home, 
            meta: {showBottomTabBar: true,showTopTabBar: true, title:"这是主页"},
            /* children: [
                {
                   path: "hot",
                   component: Hot,
                   name: 'homehot',
                   meta: {showBottomTabBar: true,showTopTabBar: true}
                }
            ] */
        },
        {
            path: "/teach", 
            component: Teach, 
            meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是教学"}
        },
        {
            path: "/shop", component: Shop,
            meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是商城"},
            // 配置二级路由
            children:[
                {
                    path: "main",component: ShopMain,
                    meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是商城"}
                },
                {
                    path: "ball",component: ShopBall,
                    meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是商城"}
                }
                
            ],
            redirect:"/shop/main"
    },
        {
            path: "/msg", 
            component: Msg, 
            meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是留言"},
            children:[
                {
                    path: "msgRecommend",component: MsgRecommend,
                    meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是留言"}
                },
                {
                    path: "myMsg",component: MyMsg,
                    meta: {showBottomTabBar: true,showTopTabBar: true,title:"这是留言"}
                }
            ],
            redirect:"/msg/msgRecommend"

    
    },
        {path: "/me", component: Me, meta: {showBottomTabBar: true,title:"我的主页"}
    },
        {path: "/login", component: Login},
        {path: "/choose", component: Choose, meta: {showBottomTabBar: true}},
        // 配置二级路由
        {
            path: '/home/hot',
            component: Hot,
            name: 'homehot',
            meta: {showMainTabBar: true}
        },
        {
            path: '/home/main',
            component: Main,
            name: 'homemain',
            meta: {showMainTabBar: true}
        },
        {
            path: '/teach/main',
            component: Teachmain,
            name: 'teachmain',
            meta: {showMainTabBar: true}
        },
        {
            path: '/me/prefer',
            component: Prefer,
            meta: {showMainTabBar: true}
            // name: 'me'
        }
    ]
})

