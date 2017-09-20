var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:root@127.0.0.1:5432/medisoft';
//var connectionString = 'postgres://u332c2a02a3574966a2a0b504b3e41688:f07214e6a9964fc2b249c50fe0d87129@10.72.6.143:5432/d0ab479f278af44ca874e85b0b84f9947?sslmode=disable';
var conn = pgp(connectionString);

module.exports.conn = conn;
