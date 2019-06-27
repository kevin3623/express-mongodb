var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 用户注册
// 注册逻辑
// 数据验证
router.post('/user/register',function (req,res) {
  res.send('注册成功')
})
router.post('/login', function(req, res, next) {
  res.send('登入成功');
});
module.exports = router;
