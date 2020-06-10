var userMap = {
    user: {
        add: 'insert into user(uName, uPassword) values (?, ?)',
        prefer:"UPDATE `user` SET uPhone=? ,uAge=? ,uEmail=?, uAddress=? ,uImg=? WHERE uId=?",//完善用户信息
        select_name: 'SELECT * from user where uName = ?',    //查询 username
        select_password: 'SELECT * from user where uPassword = ? ' ,     //查询 password
        select_all: 'select * from user where uId = ?'
    }
}
module.exports = userMap;

