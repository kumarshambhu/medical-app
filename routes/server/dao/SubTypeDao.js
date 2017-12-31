/**
 * Created by Shambhu on 3/31/2017.
 */
var db = require('./db/dbConnectionProvider');
var subtypeDao = {
    getAllSubType: function (callback) {
        db.conn.any('SELECT item_sub_type_id id, item_type.item_type_id typeid, sub_type_name subtypename,' +
            'type_name typename, item_sub_type.date_of_entry dateofentry ,amount FROM item_sub_type,item_type '+
            ' where item_type.item_type_id = item_sub_type.item_type_id;')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
                callback({
                    status: 'true',
                    message: err
                });
            });
    },
    getSubTypeById: function (data,callback) {
        db.conn.any('SELECT item_sub_type_id id, sub_type_name subtypename,amount,item_sub_type.item_type_id typeid' +
            ' FROM item_sub_type '+
            ' where item_sub_type.item_type_id = $1;',data)
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    addSubType: function (data, callback) {
        db.conn.none('INSERT INTO public.item_sub_type(item_type_id, sub_type_name, amount) ' +
            ' VALUES($1,$2,$3)', [data.typeid,data.subtypename,data.amount]).then(function () {
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
    }, deleteSubType: function (data, callback) {
        db.conn.result('delete from item_sub_type where item_sub_type_id = $1', data).then(function (result) {
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
    }, updateSubType: function (data, callback) {
        db.conn.none('update item_sub_type set sub_type_name = $1,amount = $2,item_type_id =$3 ' +
            ' where  item_sub_type_id = $4', [data.subtypename, data.amount,data.typeid,data.id]).then(function () {
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
module.exports.subtypeDao = subtypeDao;