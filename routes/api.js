var express = require('express');
var router = express.Router();

// 统一返回格式
var responseData;
router.use( function (req,res,next) {
  // console.log('每次请求都要先执行这个');
  responseData = {
      code: 0,
      message:''
  };
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 用户注册
// 注册逻辑
// 数据验证
router.post('/register',function (req,res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var repassword = req.body.repassword;
  var mobile = req.body.mobile;
  var email = req.body.email;
  // 判断用户名是否为空
  if( username == ''){
    responseData.code = 2;
    responseData.message = '用户名不能为空';
    res.json(responseData);
    return;
  }
  // 判断密码是否为空
  if( password == ''){
      responseData.code = 2;
      responseData.message = '密码不能为空';
      res.json(responseData);
      return;
  }
  // 判断两次密码是否一致
  if( password != repassword){
      responseData.code = 2;
      responseData.message = '两次输入密码不一致';
      res.json(responseData);
      return;
  }
/* 这里先省略 判断用户名是否已经注册 的步骤。需要查询数据库 */

/* *************************************************** */

/* 这里先省略 保存用户注册的信息到数据中 的步骤。需要查询数据库 */

/* *************************************************** */


  res.json(responseData);
  // res.send('注册成功')
})
router.post('/login', function(req, res) {
  // console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  
  if(password == ''|| username==''){
    responseData.code = 2;
    responseData.message = '用户名或密码不能为空';
    res.json(responseData);
    return
  }

  res.send('登入成功');
});
module.exports = router;
