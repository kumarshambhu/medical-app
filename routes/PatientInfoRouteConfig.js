/**
 * Created by Shambhu on 3/29/2017.
 */
function PatientInfoRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();
}

PatientInfoRouteConfig.prototype.init = function () {
    this.addRoutes();
    this.processRoutes();
}

PatientInfoRouteConfig.prototype.processRoutes = function () {
    var self = this;

    self.routeTable.forEach(function (route) {

        if (route.requestType == 'get') {
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'put') {
            self.app.put(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {
            self.app.delete(route.requestUrl, route.callbackFunction);
        }

    });
}

PatientInfoRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/patient',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.getAllPatient(
                function (users) {
                    response.json(users);
                });
        }
    });
    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/patient',
        callbackFunction: function (request, response) {
            //console.log("request.body:",request.body);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.addPatient(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/patienthistory/:id',
        callbackFunction: function (request, response) {
            console.log(request.params.id);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.patientHistory(request.params.id,
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });

    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/patient',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.updatePatient(request.body,
                function (status) {
                    response.json(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/patientvisit',
        callbackFunction: function (request, response) {
            console.log("request.body:",request.body);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.searchPatient(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });
    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/patientvisit',
        callbackFunction: function (request, response) {
            console.log("request.body:",request.body);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.addVisit(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/generatemrd',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.generateMrd(
                function (users) {
                    console.log(users);
                    response.send(users[0].mrd);
                });
        }
    });

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/bill',
        callbackFunction: function (request, response) {
            //console.log("request.body:",request.body);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.generateBill(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/getBill',
        callbackFunction: function (request, response) {
            //console.log("request.body:",request.body);
            var dao = require('./server/dao/PatientInfoDao');
            dao.patientInfoDao.getBill(request.body,
                function (data) {
                    response.send(data);
                    console.log(data);
                });
        }
    });
}
module.exports = PatientInfoRouteConfig;
