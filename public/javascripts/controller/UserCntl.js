angular.module('MyApp').controller('UserController',function ($scope,$http,UserService) {
    //$scope.userTypes = MedisoftFactory.getUserTypeList();

    $scope.userinfo = {};

    $scope.getUserTypes = function () {
        $http.get('/api/usertype').then(function (userList) {
            $scope.userTypes = userList.data;
        });
    };
    $scope.getUserTypes();
    $scope.getUserList = function () {
        $http.get('/api/users').then(function (userList) {
            $scope.userList = userList.data;
        });
    };
    $scope.getUserList();

    $scope.addUser = function (userinfo) {
        UserService.addUser(userinfo).then(
            function (response) {
                $scope.userinfo = {};
                $scope.editMode = false;
                $scope.getUserList();

                showSuccess("Type Add", response.data.message);
            }, function (reason) {
                $scope.userinfo = {};
                $scope.editMode = false;
                console.log("Failed to get Type!!",reason);
            });
    };

    $scope.updateUser = function (userinfo) {

        UserService.updateUser(userinfo).then(
            function (response) {
                $scope.userinfo = {};
                $scope.editMode = false;
                $scope.getUserList();

                showSuccess("Type Add", response.data.message);
            }, function (reason) {
                $scope.userinfo = {};
                $scope.editMode = false;
                console.log("Failed to get Type!!",reason);
            });
    };
    $scope.deleteUser = function (data) {
        bootbox.confirm("Are you sure want to delete <b>"+data.username+"</b>?", "Delete User",function (result) {
            if(result === true){
                UserService.deleteUser(data.id).then(function (response) {
                        if (response === undefined) {
                            showSuccess("Delete User","There is some problem in processing request!!");
                        } else {
                            if (response.data.status === 'true') {
                                showSuccess("Delete User", response.data.message);
                                $scope.getUserList();
                            }
                            else if (response.data.status === 'false') {
                                showSuccess("Delete User",response.data.message);
                            }
                        }
                    }
                    , function (reason) {

                    });
            }
        });
    };
    $scope.editUser = function(data) {
        $scope.userinfo = data;
        $scope.editMode = true;
    };
    

    
    $scope.resetUser = function(){
    	$scope.editMode = false;
        $scope.userinfo = {};
    }
    $scope.predicate = 'id';
});
