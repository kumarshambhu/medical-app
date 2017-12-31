/**
 * Created by Shambhu on 4/4/2017.
 */
angular.module('MyApp').service('BillService', function ($http, $q) {
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


    this.SaveBill = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/bill',
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



    this.getBill = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/getBill',
                method: 'POST',
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
                console.log("reason:",reason);
                deferred.reject(reason);
            });
        return deferred.promise;
    };
});