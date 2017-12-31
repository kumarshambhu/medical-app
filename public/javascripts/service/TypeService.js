/**
 * Created by Shambhu on 3/31/2017.
 */
angular.module('MyApp').service('TypeService', function ($http, $q) {
    this.getTypeList = function () {
        var promise = $http.get('/api/types'),
            deferred = deferred || $q.defer();
        promise.then(
            // OnSuccess function
            function (response) {
                // This code will only run if we have a successful promise.
                deferred.resolve(response);
            },
            // OnFailure function
            function (reason) {
                // This code will only run if we have a failed promise.
                deferred.reject(reason);
            });

        return deferred.promise;
    };


    this.addType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/type',
                method: 'POST',
                responseType: "json",
                data: (data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            deferred = deferred || $q.defer();
        promise.then(
            function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
        return deferred.promise;
    };


    this.deleteType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: 'api/type/'+data,
                method: 'delete',
                responseType: "json"
            }),
            deferred = deferred || $q.defer();
        promise.then(
            function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
        return deferred.promise;
    };

    this.updateType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/type',
                method: 'PUT',
                responseType: "json",
                data: data,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            deferred = deferred || $q.defer();
        promise.then(
            function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
        return deferred.promise;
    };
});