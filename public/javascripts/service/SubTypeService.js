/**
 * Created by Shambhu on 3/31/2017.
 */
angular.module('MyApp').service('SubTypeService', function ($http, $q) {
    this.getSubTypeList = function () {
        var promise = $http.get('/api/subtypes'),
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

    this.getSubTypeById = function (typeId) {
        var promise = $http.get('/api/subtypes/'+typeId),
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


    this.addSubType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/subtype',
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


    this.deleteSubType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: 'api/subtype/'+data,
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

    this.updateSubType = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/subtype',
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