angular.module('MyApp').controller('SubTypeController', function ($scope, TypeService,SubTypeService) {

    $scope.itemSubType = {};
    $scope.editMode = false;

    $scope.editSubType = function(data) {
        $scope.itemSubType = data;
        $scope.editMode = true;
    };

    $scope.resetSubType = function(){
        $scope.itemSubType = {};
        $scope.editMode = false;
    }

    $scope.getTypeList = function () {
        TypeService.getTypeList().then(
            function (response) {
                $scope.itemTypes = response.data;
            }, function (reason) {
                console.log("Failed to get Type!!")

            });
    };
    $scope.getTypeList();

    $scope.getSubTypeList = function () {
        SubTypeService.getSubTypeList().then(
            function (response) {
                $scope.subtypes = response.data;
            }, function (reason) {
                console.log("Failed to get Type!!")

            });
    };
    $scope.getSubTypeList();

    $scope.addSubType = function (subType) {
        alert("Sub Type");
        SubTypeService.addSubType(subType).then(
            function (response) {
                $scope.itemSubType = {};
                $scope.editMode = false;
                $scope.getSubTypeList();
                showSuccess("Sub Type",response.data.message);
            }, function (reason) {
                $scope.itemSubType = {};
                $scope.editMode = false;
                showSuccess("Sub Type",reason);
            });
    };
    
    $scope.updateSubType = function (subType) {
        SubTypeService.updateSubType(subType).then(
            function (response) {
                $scope.itemSubType = {};
                $scope.editMode = false;
                $scope.getSubTypeList();
                showSuccess("Sub Type",response.data.message);
            }, function (reason) {
                $scope.itemSubType = {};
                $scope.editMode = false;
                showSuccess("Sub Type",reason);
            });

    };
    

    $scope.deleteType = function (typedata) {
        bootbox.confirm("Are you sure want to delete <b>"+typedata.subtypename+"</b>?", "Sub Type",function (result) {
            if(result === true){
                SubTypeService.deleteSubType(typedata.id).then(function (response) {
                        if (response === undefined) {
                            showSuccess("Sub Type","There is some problem in processing request!!");
                        } else {
                            if (response.data.status === 'true') {
                                showSuccess("Sub Type", response.data.message);
                                $scope.getSubTypeList();
                            }
                            else if (response.data.status === 'false') {
                                showSuccess("Sub Type",response.data.message);
                            }
                        }
                    }
                    , function (reason) {

                    });
            }
        });
    };

    $scope.predicate = 'id';
});
