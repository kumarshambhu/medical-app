/**
 * Created by Shambhu on 3/31/2017.
 */
angular.module('MyApp').service('CompanyInfoService', function ($http, $q) {
    this.getCompany = function () {
        var promise = $http.get('/api/company'),
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


    this.addCompany = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/company',
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



    this.updateCompany = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/company',
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