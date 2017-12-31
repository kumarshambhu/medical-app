/**
 * Created by Shambhu on 3/29/2017.
 */
function TypeRouteConfig(app) {

    this.app = app;
    this.routeTable = [];
    this.init();
}

TypeRouteConfig.prototype.init = function () {
    this.addRoutes();
    this.processRoutes();
}

TypeRouteConfig.prototype.processRoutes = function () {
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

TypeRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/type',
        callbackFunction: function (request, response) {
            //console.log("request.body:"+request.body);
            var dao = require('./server/dao/TypeDao');
            dao.typeDao.addType(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/types',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/TypeDao');
            dao.typeDao.getAllType(
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });

    self.routeTable.push({
        requestType: 'delete',
        requestUrl: '/api/type/:id',
        callbackFunction: function (request, response) {
            console.log(request.params.id);
            var dao = require('./server/dao/TypeDao');
            dao.typeDao.deleteType(request.params.id,
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });

    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/type',
        callbackFunction: function (request, response) {
            console.log("request.body.id:"+request.body.id);
            console.log("request.body.name:"+request.body.name);
            var dao = require('./server/dao/TypeDao');
            dao.typeDao.updateType(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });
}
module.exports = TypeRouteConfig;
