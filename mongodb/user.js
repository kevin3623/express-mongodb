/**
 * 用户信息
 */
// 定义数据库表存储结构
const mongoose = require('./db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // 用户名
    username:String,
    // 密码
    password:String

},{
    versionKey: false // 去掉 mongoose 创建数据库默认生成  版本号 这个字段
})

// 生成Model
module.exports = mongoose.model('user', UserSchema,'user');