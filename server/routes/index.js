var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sqlUser = require('../models/User');
var $sqlMsg = require('../models/Msg');

//连接数据库
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'badminton'
});
conn.connect();

//结果返回json形式
var jsonWrite = function(res, results) {
  if(typeof results === 'undefined') {
      res.send('err')
  } else {
      res.json(results);
      // res.send("1");
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 热门新闻
router.get('/api/hotnews',function(req,res){
  const data = require('../data/hotnews.json');
  res.send(data);
})

// 新闻列表
router.get('/api/news',function(req,res){
  const data = require('../data/news.json');
  res.send(data);
})

//获取教学信息
router.get('/api/teachs',function(req,res){
  const data = require('../data/teachs.json');
  res.send(data);
})

// 获取头像
router.get('/api/hImg',function(req,res){
  const data = require('../data/head.json');
  res.send(data);
})

// 获取所有评论
router.get('/api/msg',function(req,res){
  var selAll = $sqlMsg.msg.selAll;
  conn.query(selAll,function(error,results){
    // console.log(results);
  res.json(results);
  })
  // console.log(params);
})


/* POST home page. */
// 用户登录接口
router.post('/api/userLogin',function(req,res) {
  // 获取用户数据
  var sql_name = $sqlUser.user.select_name;
  var sql_password = $sqlUser.user.select_password;
  var params = req.body;
  // console.log(params);
  //查询用户名是否存在密码是否正确
  conn.query(sql_name,params.uName,function(error, results, fields){
    if(error){
      console.log(err);
    }
    if(results[0] === undefined){
      res.send("-1");
      console.log("用户不存在");
    }
    //用户密码正确
    // console.log(results[0].uPassword);
    if(params.uPass == results[0].uPassword){
      jsonWrite(res,results);
    }else{
      res.send("0");
      console.log("密码错误");
    }
  })
})
//用户注册接口
router.post('/api/userRegister',function(req,res){
  var sql_name = $sqlUser.user.select_name;
  var add = $sqlUser.user.add;
  var params = req.body;
  conn.query(sql_name,params.uName,function(err,results){
    if (err) {
      console.log(err)
    }
    if (results[0] === undefined) {
      conn.query(add, [params.uName, params.uPass], function (err, result) {
        if (err) {
          console.log(err);
        }
        if (result) {
          res.send('200');
        }
      })
    } else {
      res.send('-1') //当前注册username与数据库重复时，data返回-1
    }
  })
})
// 获得用户信息
router.post('/api/user',function(req,res){
  var params = req.body;
  var uId = params.uId;
  conn.query("select * from user where uId = ?",uId,function(error,results){
    // console.log(results);
    res.json(results)
  })
  // console.log(params);
})
//完善用户信息
router.post('/api/prefer',function(req,res){
  var params = req.body;
  var uId = params.uId;
  var uPhone = params.userPhone;
  var uEmail = params.userEmail;
  var uAge = params.userAge;
  var uAddress = params.userAddress;
  var uImg = params.uImg;
  // console.log("id"+uId)
  var sql_all = $sqlUser.user.select_all;
  var sql_prefer = $sqlUser.user.prefer;
  // console.log(params);
  if(uId != null){
    conn.query(sql_all,uId,function(err, res){
      if(err){
        console.log(err)
      }else{
        conn.query(sql_prefer,[uPhone,uAge,uEmail,uAddress,uImg,uId],function(error,results){
          if(error){
            console.log(error)
          }
        })
      }
    })
  }
})
//用户评论接口
router.post('/api/addMsg',function(req,res){
  var sqlAddMsg = $sqlMsg.msg.addMsg;
  var params = req.body;
  var content = params.content;
  var time = params.time;
  var uId = params.uId;
  var uName = params.uName;
  conn.query(sqlAddMsg,[content,time,uId,uName],function(error,results){
    if(error){
      console.log(error)
    }
  })
})
//用户添加主页评论接口
router.post('/api/addMainMsg',function(req,res){
  var sqlAddMsg = $sqlMsg.msg.addMainMsg;
  var params = req.body;
  var content = params.content;
  var time = params.time;
  var uId = params.uId;
  var uName = params.uName;
  var tId = params.tId;
  console.log(tId);
  conn.query(sqlAddMsg,[tId,content,time,uId,uName],function(error,results){
    if(error){
      console.log(error)
    }else{
      res.json(results);
    }
  })
})
// 获取自己的评论
router.post('/api/myMsg',function(req,res){
  var uId = req.body.uId;
  var selMine = $sqlMsg.msg.selMine;
  conn.query(selMine,uId,function(error,results){
    console.log(results);
    res.json(results);
  })
  // console.log(params);
})
//用户删除自己评论
router.post('/api/delMsg',function(req,res){
  var sqlDelMsg = $sqlMsg.msg.delMsg;
  var params = req.body;
  var uId = params.uId;
  var mId = params.mId;
  console.log(params.mId);
  conn.query(sqlDelMsg,[mId,uId],function(error,results){
    if(error){
      console.log(error)
    }
  })
})


module.exports = router;
