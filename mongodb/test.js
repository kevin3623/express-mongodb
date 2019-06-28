const User = require('./user');

User.findOne({
  username:'陈二狗'
},function(err,docs){
  
  console.log(docs._doc);
  
})


// 插入
/* function insert() {
  var user = new User({
    username: "陈二狗", // 用户名
    password: "abc123", // 用户密码
    age: 18, // 用户年龄
    lastLoinDate: new Date() // 最近登录一次时间
  });

  user.save(function (err, docs) {
    if(err) {
      console.log("Error: " + err);
    } else {
      console.log("docs: " + docs);
    }
  })
}
insert(); */