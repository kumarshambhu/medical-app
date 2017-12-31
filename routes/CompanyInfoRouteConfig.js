/**
 * Created by Shambhu on 3/29/2017.
 */
function CompanyInfoRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();
}

CompanyInfoRouteConfig.prototype.init = function () {
    this.addRoutes();
    this.processRoutes();
}

CompanyInfoRouteConfig.prototype.processRoutes = function () {
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

CompanyInfoRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/company',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/CompanyInfoDao');
            dao.companyInfoDao.getCompany(
                function (users) {
                    response.json(users);
                });
        }
    });

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/company',
        callbackFunction: function (request, response) {
            console.log("request.body:",request.body);
            var dao = require('./server/dao/CompanyInfoDao');
            dao.companyInfoDao.addCompany(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/company',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/CompanyInfoDao');
            dao.companyInfoDao.updateCompany(request.body,
                function (status) {
                    response.json(status);
                });
        }
    });
}
module.exports = CompanyInfoRouteConfig;
