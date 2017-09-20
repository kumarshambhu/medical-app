/**
 * Created by Shambhu on 3/29/2017.
 */
function UserRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();
}

UserRouteConfig.prototype.init = function () {
    this.addRoutes();
    this.processRoutes();
}

UserRouteConfig.prototype.processRoutes = function () {
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

UserRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/usertype',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/UserDao');
            dao.userDao.getAllUserType(
                function (users) {
                    response.json(users);
                });
        }
    });
    self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/users',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/UserDao');
            dao.userDao.getAllUsers(
                function (users) {
                    response.json(users);
                });
        }
    });
    self.routeTable.push({
        requestType: 'post',
        requestUrl: '/api/user',
        callbackFunction: function (request, response) {
            console.log("request.body:",request.body);
            var dao = require('./server/dao/UserDao');
            dao.userDao.addUser(request.body,
                function (status) {
                    response.json(status);
                    console.log(status);
                });
        }
    });

    /*self.routeTable.push({
        requestType: 'get',
        requestUrl: '/api/user',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/TypeDao');
            dao.typeDao.getAllType(
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });*/

    self.routeTable.push({
        requestType: 'delete',
        requestUrl: '/api/user/:id',
        callbackFunction: function (request, response) {
            console.log(request.params.id);
            var dao = require('./server/dao/UserDao');
            dao.userDao.deleteUser(request.params.id,
                function (products) {
                    console.log(products);
                    response.json(products);
                });
        }
    });

    self.routeTable.push({
        requestType: 'put',
        requestUrl: '/api/user',
        callbackFunction: function (request, response) {
            var dao = require('./server/dao/UserDao');
            dao.userDao.updateUser(request.body,
                function (status) {
                    response.json(status);
                });
        }
    });
}
module.exports = UserRouteConfig;
