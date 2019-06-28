var express = require('express');
var router = express.Router();
const User = require('../mongodb/user');
var session = require('express-session');
var app = express();
// session
app.use(session({
  name: 'userInfo', // 这里是cookie的name，默认是connect.sid
  secret: 'my_session_secret', // 建议使用 128 个字符的随机字符串
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60 * 1000, httpOnly: true }
}));

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
/* 判断用户名是否已经注册 */
  User.findOne({
    username:username
  },function(err,doc){
    // console.log(err);
    // console.log(doc);
    if(doc){
      responseData.code = 3;
      responseData.message = '用户名已经被注册了';
      res.json(responseData);
      return;
    }
    var user = new User({
      username:username,
      password: password
    })
    user.save();
    responseData.code = 4;
    responseData.message = '注册成功';
    res.json(responseData);
    return;
  })
})

router.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  // console.log(req.cookies.userInfo);
  console.log('dd',req.session);
  
  if(password == ''|| username==''){
    responseData.code = 2;
    responseData.message = '用户名或密码不能为空';
    res.json(responseData);
    return
  }
  User.findOne({
    username,
    password
  },function(err,doc){
    
    if(doc){
      responseData.code = 4;
      responseData.message = '登录成功';
      responseData.userInfo = {
        id: doc.id,
        username: doc.username
      };

      res.cookie(
        'userInfo',
        JSON.stringify({
          id: doc.id,
          username: doc.username
        })
      );
      // req.session.username=doc.username;
      res.json(responseData);
      return;
    }
    responseData.code = 2;
    responseData.message = '用户名和密码不存在';
    res.json(responseData);
    return;
  })
  
});
module.exports = router;
