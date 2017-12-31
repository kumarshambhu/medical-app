/**
 * Created by Shambhu on 4/1/2017.
 */
/**
 * Created by Shambhu on 3/31/2017.
 */
var db = require('./db/dbConnectionProvider');
var dateFormat = require('dateformat');
const pg = require('pg');
var patientInfoDao = {
    getAllPatient: function (callback) {
        db.conn.any('select * from patient_info')
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    addPatient: function (data, callback) {
        console.log(data);
        db.conn.none('INSERT INTO patient_info(name, mrd, title, address, phone, birthday, sex) ' +
            ' VALUES ($1,$2,$3,$4,$5,$6,$7);'
                , [data.name,data.mrd,data.title,data.address,data.phone,data.birthday,data.sex]).then(function () {
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
    },
    /*deletePatientInfo: function (data, callback) {
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
    },*/
    updatePatient: function (data, callback) {
        console.log(data);
        db.conn.none('UPDATE patient_info SET  name=$1, mrd=$2, title=$3, address=$4, ' +
                'phone=$5, birthday=$6, sex=$7 WHERE id=$8',
                [data.name, data.mrd,data.title, data.address,data.phone,
                    data.birthday,data.sex, data.id]).then(function () {
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
    },
    searchPatient: function (data,callback) {
        console.log(data);
        $queryStr = "SELECT A.*, (SELECT COUNT(*) FROM patient_visit B WHERE B.patient_id = A.id) AS historyCount FROM patient_info A" +
            " where  "+data.searchBy +"='"+data.value+"'";
        console.log($queryStr);
        db.conn.any($queryStr)
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },

    patientHistory: function (data,callback) {
        console.log(data);
        $queryStr = "SELECT * FROM patient_visit B WHERE B.patient_id = $1";
        console.log($queryStr);
        db.conn.any($queryStr,data)
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    addVisit: function (data,callback) {
        console.log(data);
        $queryStr = "INSERT INTO patient_visit(patient_id, diagnosis) VALUES ($1,$2)";
        console.log($queryStr);
        db.conn.any($queryStr,[data.patientid,data.diagnosis])
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    },
    generateMrd :function(callback){
        db.conn.any("insert into mrd_generator values (array_to_string" +
            " (ARRAY(SELECT chr((65 + round(random() * 25)) :: integer) FROM generate_series(1,8)), '')) returning mrd ")
            .then(function (data) {
                callback(data);
        }).catch(function (err) {
            this.generateMrd();
        });
    },
    generateBill: function (billData, callback) {

        var mydata = [];
        var totalAmount = 0;
        console.log("patient ID:"+billData['patient']);
        for(var prop in billData.billingData){
            console.log(prop+" : ",billData.billingData[prop].id+"--"+billData.billingData[prop].finalamount);
            var category = {
                bill_master_id : 0,
                item_type_id : billData.billingData[prop].typeid,
                item_sub_type_id :billData.billingData[prop].id,
                patient_id :billData['patient'],
                item_count : billData.billingData[prop].count,
                bill_details_name :'Test',
                amount: billData.billingData[prop].amount
            }

            mydata.push(category);
            totalAmount += billData.billingData[prop].finalamount;

        }

        var insertStatement = "INSERT INTO public.bill_details"+
            "(bill_master_id, item_type_id, item_sub_type_id, patient_id,item_count, bill_details_name, amount)"+
            " VALUES ($1,$2,$3,$4,$5,$6,$7); ";
        db.conn.query('INSERT INTO bill_master(amount) VALUES ($1) RETURNING id,bill_name'
            , [totalAmount]).then(function (result) {
                console.log("result : ",result[0].id+" "+result[0].bill_name);
            mydata.forEach( function (data) {
                data.bill_master_id = result[0].id;
                data.bill_details_name = result[0].bill_name;
                console.log("data data:",data);
                db.conn.any(insertStatement,[data.bill_master_id,data.item_type_id,data.item_sub_type_id,
                                        data.patient_id,data.item_count,data.bill_details_name,data.amount])
                    .then(function (data) {
                    }).catch(function (err) {
                });
            });
            callback({
                status: 'true',
                message: result[0].bill_name
            });
        }).catch(function (err) {
            console.log(err.stack);
            callback({
                status: 'true',
                message: err
            });
        });
    },
    getBill: function (data,callback) {
        console.log(data);
        console.log((dateFormat(data.startDate,'dd-mm-yyyy')));
        $queryStr = "select bd.id,subItem.item_sub_type_id subtypeid,bd.item_type_id typeid, item.type_name typename, " +
            " patient.name patientname,(bd.amount * bd.item_count) finalamount, "+
            " subItem.sub_type_name subtypename,bd.bill_details_name,bd.item_count count ,bd.amount,to_char(bd.date_of_entry, 'DD-MM-YYYY') dateofentry "+
            " from bill_details bd , item_sub_type subItem,item_type item, patient_info patient "+
            " where subItem.item_sub_type_id = bd.item_sub_type_id "+
            " and item.item_type_id = bd.item_type_id " +
            " and patient.id = bd.patient_id ";
            //console.log("data.billNo: "+$queryStr);
            if(data.billNo !==undefined){
                $queryStr += " and bd.bill_details_name = '"+data.billNo+"'";
            }
            if(data.startDate !== undefined && data.endDate !== undefined){
                $queryStr += " and to_char(bd.date_of_entry, 'DD-MM-YYYY') >= '"+(dateFormat(data.startDate,'dd-mm-yyyy'))+
                    "' and to_char(bd.date_of_entry, 'DD-MM-YYYY') <= '"+(dateFormat(data.endDate,'dd-mm-yyyy'))+"'";
            }
            //console.log($queryStr)
        db.conn.any($queryStr)
            .then(function (data) {
                callback(data);
            }).catch(function (err) {
            callback({
                status: 'true',
                message: err
            });
        });
    }

    //INSERT INTO patient_visit(patient_id, diagnosis) VALUES ($1,$2);
}
module.exports.patientInfoDao = patientInfoDao;