var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('ang5', {title: 'Express'});
});
router.get('/1', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/PatientInfo', function (req, res, next) {
    res.render('transactionspages/patient_info', {title: 'Patient Info'});
});
router.get('/PatientVisit', function (req, res, next) {
    res.render('transactionspages/patient_visit', {title: 'Patient Visit'});
});
router.get('/GenerateBill', function (req, res, next) {
    res.render('transactionspages/generate_bill', {title: 'Express'});
});
router.get('/DatewiseCollection', function (req, res, next) {
    res.render('generatereport/datewise_collection', {title: 'Express'});
});
router.get('/PatientwiseCollection', function (req, res, next) {
    res.render('generatereport/patientwise_collection', {title: 'Express'});
});
router.get('/Showbill', function (req, res, next) {
    res.render('generatereport/show_bill', {title: 'Express'});
});
router.get('/userinfo', function (req, res, next) {
    res.render('masterscreen/userinfo', {title: 'User Info'});
});
router.get('/companyinfo', function (req, res, next) {
    res.render('masterscreen/companyinfo', {title: 'Company Info'});
});
router.get('/type', function (req, res, next) {
    res.render('masterscreen/type', {title: 'Type'});
});
router.get('/subtype', function (req, res, next) {
    res.render('masterscreen/sub_type', {title: 'Sub Type'});
});


module.exports = router;
