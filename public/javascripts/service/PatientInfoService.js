/**
 * Created by Shambhu on 3/31/2017.
 */
angular.module('MyApp').service('PatientInfoService', function ($http, $q) {
    this.allPatientInfo = function () {
        var promise = $http.get('/api/patient'),
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


    this.addPatientInfo = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/patient',
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



    this.updatePatientInfo = function (data) {
        console.log("data in service", data);
        var promise = $http({
                url: '/api/patient',
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