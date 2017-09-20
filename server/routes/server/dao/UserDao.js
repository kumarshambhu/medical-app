/**
 * Created by Shambhu on 4/1/2017.
 */
/**
 * Created by Shambhu on 3/31/2017.
 */
var db = require('./db/dbConnectionProvider');
var userDao = {
    getAllUserType: function (callback) {
        db.conn.any('select * from user_type')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    getAllUsers: function (callback) {
        db.conn.any('select users.id, user_name username, user_type usertypeid, user_type.name usertypename, ' +
            ' password from users,user_type where user_type = user_type.id')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    addUser: function (data, callback) {
        console.log(data);
        db.conn.none('INSERT INTO users(user_name, user_type, password) VALUES ($1, $2, $3);'
                , [data.username,data.usertypeid,data.password]).then(function () {
            callback({
                status: 'true',
                message: 'One item added.'
            });
        }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    }, deleteUser: function (data, callback) {
        db.conn.result('delete from users where id = $1', data).then(function (result) {
            callback({
                status: 'true',
                message: 'Item deleted successfully.'
            });
        }).catch(function (err) {
            callback({
                status: 'false',
                message: err
            });
        });
    }, updateUser: function (data, callback) {
        console.log(data);
        db.conn.none('UPDATE users SET user_name=$1, user_type=$2, password=$3 WHERE id=$4',
                [data.username, data.usertypeid,data.password, data.id]).then(function () {
            callback({
                status: 'true',
                message: 'Item updated successfully.'
            });
        }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    }
}
module.exports.userDao = userDao;