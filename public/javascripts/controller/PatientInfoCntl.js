angular.module('MyApp').controller('PatientInfoController', function($scope, PatientInfoService,MedisoftFactory,$http) {
    $scope.editMode = false;
    $scope.patientinfo = {};
    $scope.titleList = MedisoftFactory.getTitleList();
    $scope.sexList = MedisoftFactory.getSexList();
    $scope.generateMrd = function (id) {
        $http({
            method: 'GET',
            url: '/api/generatemrd'
        }).then(function (res) {
            $scope.patientinfo.mrd = res.data;
        });
    }
    $scope.generateMrd();
    $scope.calculateAge = function calculateAge(birthday) { // birthday is a date
        if(birthday!=null){
            var ageDifMs = Date.now() - new Date(birthday).getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }else{
            return 0;
        }
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    
    $scope.addPatientInfo = function (patientinfo) {

        PatientInfoService.addPatientInfo(patientinfo).then(
            function (response) {
                $scope.patientinfo = {};
                $scope.editMode = false;
                $scope.getPatientInfoList();
                showSuccess("Patient Info",response.data.message);
                $scope.generateMrd();
            }, function (reason) {
                $scope.patientinfo = {};
                $scope.editMode = false;
                showSuccess("Patient Info",'There is some problem in processing');
            });
    };

    $scope.updatePatientInfo = function (patientinfo) {

        PatientInfoService.updatePatientInfo(patientinfo).then(
            function (response) {
                $scope.patientinfo = {};
                $scope.editMode = false;
                $scope.getPatientInfoList();
                showSuccess("Patient Info",response.data.message);
                $scope.generateMrd();
            }, function (reason) {
                $scope.patientinfo = {};
                $scope.editMode = false;
                showSuccess("Patient Info",'There is some problem in processing');
            });
    };

    $scope.getPatientInfoList = function () {
        PatientInfoService.allPatientInfo().then(function (patientInfoList) {
            $scope.patientInfoList = patientInfoList.data;
        });
    };
    $scope.getPatientInfoList();

    $scope.editPatientinfo = function(data) {
        $scope.patientinfo = {};
        $scope.patientinfo = data;
        $scope.editMode = true;
    };

    $scope.reset = function() {
        $scope.patientinfo = {};
        $scope.editMode = false;
    };
    $scope.predicate = 'id';
});
