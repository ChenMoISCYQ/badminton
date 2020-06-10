var msgMap = {
    msg: {
        selAll: 'SELECT * FROM USER, msg WHERE `user`.`uId` = `msg`.`uId` ' ,//获取所有留言
        selMine: 'select * from msg where uId = ?' ,//获取自己的留言
        addMsg: 'insert into msg(content,time,uId,uName) values (?,?,?,?)', //添加留言
        addMainMsg: 'insert into msg(tId,content,time,uId,uName) values (?,?,?,?,?)', //教学留言
        delMsg: 'DELETE FROM msg WHERE MID=? AND uId=?;'
    }
}
module.exports = msgMap;