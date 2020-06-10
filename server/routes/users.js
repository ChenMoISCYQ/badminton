var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $user = require("./../models/User")

// 连接数据库
// 创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'badminton'
});
// 连接mysql
connection.connect();
var User = [];
//断开连接
// connection.end();

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users', function(req, res, next) {
  res.send('test');
});
router.get('/api', function(req, res, next) {
  res.send('test');
}); */

//增加用户接口
router.post('/api/addUser',function(req, res, next) {
  var user_name = $user.user.select_name;
  var add = $user.user.add;
  var params = req.body;
  // console.log(params);
})
//查找用户接口
router.post('/api/selectUser',function(req, res, next) {
  var user_name = $user.user.select_name;
  var user_password = $user.user.select_password;
  var params = req.body;
  console.log(params)
 /*  connection.query(user_name,params.uPassword,function(err,result){

  }) */
})
module.exports = router;
