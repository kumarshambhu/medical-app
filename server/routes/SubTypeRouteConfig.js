/**
 * Created by Shambhu on 3/29/2017.
 */
function SubTypeRouteConfig(app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

SubTypeRouteConfig.prototype.init = function () {
    this.addRoutes();
    this.processRoutes();
}

SubTypeRouteConfig.prototype.processRoutes = function () {
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

SubTypeRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/subtype',
        callbackFunction: function (request, response) {
            //console.log("request.body:"+request.body);
            var dao = require('./server/dao/SubTypeDao');
            dao.subtypeDao.addSubType(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/subtypes',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/SubTypeDao');
            dao.subtypeDao.getAllSubType(
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });
    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/subtypes/:id',
        callbackFunction: function (request, response) {
            console.log(request.params.id);
            var dao = require('./server/dao/SubTypeDao');
            dao.subtypeDao.getSubTypeById(request.params.id,
                function (products) {
                    response.json(products);
                });
        }
    });
    self.routeTable.push({
        requestType: 'delete',
        requestUrl: '/api/subtype/:id',
        callbackFunction: function (request, response) {
            console.log(request.params.id);
            var dao = require('./server/dao/SubTypeDao');
            dao.subtypeDao.deleteSubType(request.params.id,
                function (products) {
                    response.json(products);
                });
        }
    });

    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/subtype',
        callbackFunction: function (request, response) {
            console.log("request.body.id:"+request.body);
            console.log("request.body.name:"+request.body.name);
            var dao = require('./server/dao/SubTypeDao');
            dao.subtypeDao.updateSubType(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });
}
module.exports = SubTypeRouteConfig;
