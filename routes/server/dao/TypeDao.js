/**
 * Created by Shambhu on 3/31/2017.
 */
var db = require('./db/dbConnectionProvider');
var typeDao = {
    getAllType: function (callback) {
        db.conn.any('select item_type_id as id, type_name as name, date_of_entry as dateOfEntry, deleted from item_type')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
                callback({
                    status: 'true',
                    message: err
                });
            });
    },
    addType: function (data, callback) {
        db.conn.none('insert into item_type(type_name) values(${name})', data).then(function () {
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
    }, deleteType: function (data, callback) {
        db.conn.result('delete from item_type where item_type_id = $1', data).then(function (result) {
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
    }, updateType: function (data, callback) {
        db.conn.none('update item_type set type_name = $1, deleted = $3 where  item_type_id = $2', [data.name, data.id, data.deleted]).then(function () {
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
module.exports.typeDao = typeDao;