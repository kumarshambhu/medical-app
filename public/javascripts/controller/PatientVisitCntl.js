angular.module('MyApp').controller('PatientVisitController',
    function ($scope, $http, MedisoftFactory, shared) {

        $scope.showHistoryDiv =  false;
        $scope.searchList = MedisoftFactory.getSearchList();
        $scope.patientInfo = {};
        $scope.patientVisitList = [];

        $scope.getPatientData = function () {
            $scope.patientVisitList = [];
            $http({
                method: 'POST',
                url: '/api/patientvisit',
                data: {
                    'searchBy': $scope.patient.searchBy,
                    'value': $scope.patient.searchValue
                }
            }).then(function (res) {
                $scope.patientInfo = res.data[0];
            });
        };

        $scope.showHistory = function (id) {
            $http({
                method: 'GET',
                url: '/api/patienthistory/' + id
            }).then(function (res) {
                $scope.showHistoryDiv =  true;
                $scope.patientVisitList = res.data;
            });
        };
        $scope.hideHistoryDiv = function(){
            $scope.showHistoryDiv =  false;
        }


        $scope.addHistory = function (patientVisit) {
            patientVisit.patientid = $scope.patientInfo.id;
            $http({
                method: 'PUT',
                url: '/api/patientvisit',
                data:patientVisit
            }).then(function (res) {
                $scope.patientVisitList =  new Array();
                $scope.patientVisit = new Object();
                $scope.patientInfo.historycount = parseInt($scope.patientInfo.historycount)+1;
                $scope.showHistoryDiv =  false;
            });
        }


    });

