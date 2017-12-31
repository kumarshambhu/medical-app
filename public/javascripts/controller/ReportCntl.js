angular.module('MyApp').controller('ReportController', function ($scope, $http, MedisoftFactory,BillService) {

    $scope.open = function($event,opened) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope[opened] = true;
    };

    $scope.today =  new Date();

    $scope.groupList = MedisoftFactory.getGroupList();

    $scope.patient = {};

    $scope.searchData = function () {
        $scope.total = 0;
        BillService.getBill($scope.patient).then(
            function (billingData) {
                if(billingData != undefined && billingData.data != undefined){
                    console.log("billingData.data",billingData.data)
                    $scope.friends = billingData.data;
                    $scope.friends.forEach(function(bill){
                        $scope.total += bill.finalamount;
                    });

                    if(!$scope.patient.groupCriteria)
                        $scope.groupBy("patientname");
                    else
                        $scope.groupBy($scope.patient.groupCriteria);

                }
            }, function (reason) {
                console.log("Failed to get Company!!")
            });
    };


    $scope.groupBy = function (attribute) {
        console.log("attribute:"+attribute)
    	if($scope.friends){
    		$scope.typeName = false;
            $scope.subTypename = false;
            $scope.billDate = false;
            $scope.patientName = false;
    		$scope.groups = [];
            if (attribute == 'typename')
                $scope.typeName = true;
            else if (attribute == 'subtypename')
                $scope.subTypename = true;
            else if (attribute == 'dateofentry')
                $scope.billDate = true;
            else if (attribute == 'patientname')
                $scope.patientName = true;

            sortOn($scope.friends, attribute);
            var groupValue = "_INVALID_GROUP_VALUE_";
            for (var i = 0; i < $scope.friends.length; i++) {
                var friend = $scope.friends[i];
                if (friend[attribute] !== groupValue) {
                    var group = {
                        label: friend[attribute],
                        friends: []
                    };
                    console.log("group: ",group);
                    groupValue = group.label;
                    $scope.groups.push(group);

                }

                group.friends.push(friend);

            }
    	}
        
    };
});
