angular.module('MyApp').controller('TypeController', function ($scope, TypeService, $window) {

    $scope.itemType = {};
    $scope.editMode = false;

    $scope.getTypeList = function () {
        TypeService.getTypeList().then(
            function (response) {
                $scope.types = response.data;
            }, function (reason) {
                console.log("Failed to get Type!!")

            });
    };
    $scope.getTypeList();

    $scope.editType = function (data) {
        $scope.itemType = angular.copy(data);
        $scope.editMode = true;
    };
    $scope.reset = function () {
        $scope.itemType = {};
        $scope.editMode = false;
    }
    $scope.addType = function (itemType) {
        TypeService.addType(itemType).then(
            function (response) {
                $scope.itemType = {};
                $scope.editMode = false;
                $scope.getTypeList();

                showSuccess("Type Add", response.data.message);
            }, function (reason) {
                $scope.itemType = {};
                $scope.editMode = false;

            });
    };

    $scope.deleteType = function (data) {
        bootbox.confirm("Are you sure want to delete <b>"+data.name+"</b>?", "Type Delete",function (result) {
            if(result === true){
                TypeService.deleteType(data.id).then(function (response) {
                       if (response === undefined) {
                           showSuccess("Delete Type","There is some problem in processing request!!");
                        } else {
                            if (response.data.status === 'true') {
                                showSuccess("Delete Type", response.data.message);
                                $scope.getTypeList();
                            }
                            else if (response.data.status === 'false') {
                                showSuccess("Delete Type",response.data.message);
                            }
                        }
                    }
                    , function (reason) {

                    });
            }
        });
    };
    $scope.updateType = function (itemType) {
        TypeService.updateType(itemType).then(
            function (response) {
                $scope.itemType = {};
                $scope.editMode = false;
                $scope.getTypeList();

                showSuccess("Type Add", response.data.message);
            }, function (reason) {
                console.log("Failed to get Type!!" + reason)
                $scope.itemType = {};
                $scope.editMode = false;

            });
    };
});