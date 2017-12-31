/**
 * Created by Shambhu on 4/1/2017.
 */
/**
 * Created by Shambhu on 3/31/2017.
 */
var db = require('./db/dbConnectionProvider');
var companyInfoDao = {
    getCompany: function (callback) {
        db.conn.any('select * from company')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    addCompany: function (data, callback) {

        db.conn.none('INSERT INTO company(name, phone,address) VALUES ($1, $2, $3);'
                , [data.name,data.phone,data.address]).then(function () {
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
    }, updateCompany: function (data, callback) {
        console.log(data);
        db.conn.none('UPDATE company SET  name=$1, phone=$2, address=$3 WHERE id=$4',
                [data.name, data.phone,data.address, data.id]).then(function () {
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
module.exports.companyInfoDao = companyInfoDao;