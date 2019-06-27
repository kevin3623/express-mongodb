var mongoose = require('mongoose');
var testDB = "mongodb://localhost:27017/test";
mongoose.connect(testDB,{ useNewUrlParser: true }, function (err) {
    if (err) {
        console.log('connect fail');
    } else {
        console.log('connect success');
    }
});



// const MongoClient = require('mongodb').MongoClient;

// const url = "mongodb://localhost:27017"
// const dbName = 'express-project'
// // 连接数据库
// MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
//     if (err) throw err
//     console.log('数据库已连接')
//     const db = client.db(dbName)
//     console.log(db);
    
//     db.createCollection("user", (err, res) => {
//         if (err) throw err
//         console.log('成功创建集合')
//       })
//     db.createCollection("alias", (err, res) => {
//     if (err) throw err
//     console.log('成功创建集合')
//     })

// })