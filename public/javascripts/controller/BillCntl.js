angular.module('MyApp').controller('BillController', function ($scope, $http, MedisoftFactory,
                                                                       BillService,TypeService,SubTypeService) {
    $scope.patientBill =new Object();
	$scope.billingData = new Array();
    $scope.billingTotalValue = 0;
    $scope.billNumber = "";
    $scope.billingDataForPrint = new Array();

    TypeService.getTypeList().then(function (itemTypes) {
        $scope.itemTypes = itemTypes.data;
    });
    $scope.searchList = MedisoftFactory.getSearchList();
    $scope.subtypes = new Array();
    $scope.loadSubType = function () {
        var typeId = $scope.bill.typeId;
        $scope.bill.amount = 0;
        SubTypeService.getSubTypeById(typeId).then(function (subtypes) {
            $scope.subtypes = subtypes.data;
        });
    };

    $scope.getAmount = function (subtupe) {
        angular.forEach($scope.subtypes, function (subtype) {
            if (subtype.id == $scope.bill.SubTypeId) {
                $scope.bill.amount = subtype.amount;
            }
        });
    };

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
            if(res.data.length>0){
                $patientInfoData = res.data[0];
                $scope.patientBill = $patientInfoData;
            }else{
            	alert("in else");
                //$scope.successPopUp("No Data Found",'Alert');
            }
        });
    };

    
    $scope.getBillingData = function(){
    	var element = document.getElementById("billTypeId");
        var op = element.options[element.selectedIndex].text;
        $addFlag = true;
        angular.forEach($scope.billingData, function (billData) {
            if(billData.id == $scope.bill.SubTypeId){
                $addFlag = false;
                return false;
            }
        });

        if($addFlag){
            angular.forEach($scope.subtypes, function (subtype) {
                if (subtype.id == $scope.bill.SubTypeId) {
                    $scope.billPushData = subtype;
                    $scope.billPushData.typeName =op;
                    $scope.billPushData.count =1;
                    $scope.billPushData.finalamount =subtype.amount;
                    $scope.billingData.push($scope.billPushData);
                    $scope.billingTotalValue = parseInt($scope.billingTotalValue) + parseInt($scope.billPushData.finalamount);
                    console.log($scope.billingTotalValue);
                }
            });
        }else{
            alert("Item is already Availble");
        }

    };
    $scope.updateAmount = function(typedata){
        typedata.finalamount = typedata.amount * typedata.count;
        $scope.AmountInWord = toWords(typedata.finalamount);
    };


    $scope.removeRow = function(index){
        $scope.billingData.splice(index, 1);
    };



    $scope.SaveBill=function(){
    	if(!$scope.billingTotalValue){
    		alert('No Data Available for create Bill','Bill');
    	}else{
            var data    = { billingData:$scope.billingData, patient:$scope.patientBill.id};
            BillService.SaveBill(data).then(
                function (response) {
                    if(response != undefined && response.data != undefined){
                        $scope.billNumber = response.data.message;
                        $scope.patient ={};
                        $scope.patientBill ={};
                        $scope.billingDataForPrint = $scope.billingData;
                        $scope.billingData = [];
                        $scope.billingTotalValueForPrint = $scope.billingTotalValue;
                        $scope.billingTotalValue = 0;
                        console.log(response.data);
                        console.log(response.data.message);
                    }
                }, function (reason) {
                    console.log("Failed to get Company!!")
                });
    	}
    };


    /*$scope.print = function(){
    	$scope.columns = ['typeName', 'name','count','amount','finalamount'];
    	printBill($scope.billingDataForPrint,$scope.columns);
    };*/
    $scope.close = function(){
    	$scope.billNumber = "";
    	$scope.billingDataForPrint =[];
    }

    $scope.getBill = function(billNo){
        BillService.getBill({billNo:billNo}).then(
            function (response) {
                if(response != undefined && response.data != undefined){
                    console.log("response:",response);
                    console.log("response",response.data);
                    $scope.billingData = response.data;
                    $scope.totalAmount = 0 ;
                    $scope.billingData.forEach(function(bill){
                        $scope.totalAmount += (bill.amount* bill.count);
                    });

                }
            }, function (reason) {
                console.log("Failed to get Company!!")
            });
    }
});