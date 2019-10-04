
//1.引入express模块
const express = require('express');

//2.创建app对象
const app = express()
//定义简单路由
app.use('/sql',(req,res) => {
    console.log(res)
     /*链接数据库 */
const mysql = require('mysql');
var db ={};
db.query = function sqlback(sqllan,fn){
    var connetion = mysql.createConnection({
        host:"localhost",       //   host表示mysql安装的地址，因为我是本地的数据库，所以直接使用localhost
        user:"root",            // user表示mysql的用户名
        password:"7777777",      // password表示mysql的密码
        database:'demo',       // database表示你要选择操作的具体的库的名字
        port:3306               // port表示端口，可不填，默认就是3306

    });

    connetion.connect(function(err){  //调用connection的connect方法判断连接是否成功，如果失败，则把错误信息打印出来，并且停止运行。
        if(err){
            console.log(err);
            return;
        }
    });
    var sql = sqllan;
    if(!sql)return;
    //调用connection的query方法来直接向数据库发送sql语句，
    //并且把用回调函数返回结果，其中回调函数中有三个参数，
    //第一参数是错误对象，如果操作失败，则会停止并打印错误信息，
    //第二参数是具体的返回的结果，正常情况下是一个数组，里面包含很多json,
    //第三个参数也是一个数组，里面包含着最每个数据的解释，比如当前数据属于哪个库，那张表等等。我们使用最多的自然是第二个参数了
    connetion.query(sql,function(err,rows,filds){ //给他赋值一个叫query的方法，这个方法接受两个参数，第一个参数是你查询数据时候的sql语句，第二个参数是获取查询结果的回调函数。
        if(err){
            console.log(err);   
            return
        }
        fn(rows);
    });
   
    connetion.end(function(err){
        if(err){
            return;
        }else{
            console.log('连接关闭');
        }
    });

}
db.query('select * from d_user_list;',(data)=>{//回调方法
   
    res.send(JSON.stringify(data))
})
//   res.send('Yo000!')
})

//定义服务启动端口
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})

app.use('/sqltow',(req,res) => {
    console.log(res)
     /*链接数据库 */
const mysql = require('mysql');
var db ={};
db.query = function sqlback(sqllan,fn){
    var connetion = mysql.createConnection({
        host:"localhost",       //   host表示mysql安装的地址，因为我是本地的数据库，所以直接使用localhost
        user:"root",            // user表示mysql的用户名
        password:"7777777",      // password表示mysql的密码
        database:'demo',       // database表示你要选择操作的具体的库的名字
        port:3306               // port表示端口，可不填，默认就是3306

    });

    connetion.connect(function(err){  //调用connection的connect方法判断连接是否成功，如果失败，则把错误信息打印出来，并且停止运行。
        if(err){
            console.log(err);
            return;
        }
    });
    var sql = sqllan;
    if(!sql)return;
    //调用connection的query方法来直接向数据库发送sql语句，
    //并且把用回调函数返回结果，其中回调函数中有三个参数，
    //第一参数是错误对象，如果操作失败，则会停止并打印错误信息，
    //第二参数是具体的返回的结果，正常情况下是一个数组，里面包含很多json,
    //第三个参数也是一个数组，里面包含着最每个数据的解释，比如当前数据属于哪个库，那张表等等。我们使用最多的自然是第二个参数了
    connetion.query(sql,function(err,rows,filds){ //给他赋值一个叫query的方法，这个方法接受两个参数，第一个参数是你查询数据时候的sql语句，第二个参数是获取查询结果的回调函数。
        if(err){
            console.log(err);   
            return
        }
        fn(rows);
    });
   
    connetion.end(function(err){
        if(err){
            return;
        }else{
            console.log('连接关闭');
        }
    });

}
db.query('select * from d_user_list;',(data)=>{//回调方法
    data.push({naem:2})
    res.send(JSON.stringify(data))
})
//   res.send('Yo000!')
})
