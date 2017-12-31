angular.module('MyApp').controller('CompanyInfoController', function ($scope, CompanyInfoService) {
    $scope.editMode = false;
    $scope.company = {};
    $scope.enableEdit = function () {
        $scope.editMode = true;
    };

    $scope.getCompany = function () {
        /*$http.post('api/server/src/dao/CompanyDao.php?action=list').then(function (types) {
            $scope.company = types[0];
            console.log(types);
        });*/
        CompanyInfoService.getCompany().then(
            function (response) {
                if(response != undefined && response.data != undefined){
                    $scope.company = response.data[0];
                    console.log($scope.company);
                }
            }, function (reason) {
                console.log("Failed to get Company!!")
            });
    };
    $scope.getCompany();

    $scope.addCompany = function (company) {
        console.log(company);
        if(company != undefined){
            if(company.id != undefined){
                CompanyInfoService.updateCompany(company).then(
                    function (response) {
                        $scope.editMode = false;
                        showSuccess("Company",response.data.message);
                    }, function (reason) {
                        $scope.itemSubType = {};
                        $scope.editMode = false;
                        showSuccess("Company",reason);
                    });
            }else{
                CompanyInfoService.addCompany(company).then(
                    function (response) {
                        $scope.editMode = false;
                        $scope.company.id = msg ;
                        showSuccess("Company",response.data.message);
                    }, function (reason) {
                        $scope.itemSubType = {};
                        $scope.editMode = false;
                        showSuccess("Company",reason);
                    });

            }
        }
        /*$http({
            method  : 'POST',
            url     : 'api/server/src/dao/CompanyDao.php?action=add',
            data    : itemType,  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            // set the headers so angular passing info as form data (not request payload)
        }).success(function (msg) {
            $scope.editMode = false;
            $scope.company.id = msg ;
           // $scope.successPopUp($scope.company.name+" Added",'Added');
        }).error(function() {
            $scope.editMode = false;
            //$scope.successPopUp('Could not remove Item Type','Added');
        });*/
    };

});