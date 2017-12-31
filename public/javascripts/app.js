var app = angular.module('MyApp', ['ui.bootstrap']);
app.filter('countItems', function () {
    return function (listOfProducts) {
        //  Count how many items are in this order
        var total = 0;
        angular.forEach(listOfProducts, function (product) {
            total += product.count;
        });
        return total;
    }
});
app.filter('sumIntByKey', function () {
    return function (data, key) {
        if (typeof (data) === 'undefined' || typeof (key) === 'undefined') {
            return 0;
        }
        var sum = 0;
        for (var i = data.length - 1; i >= 0; i--) {
            sum += parseInt(data[i][key]);
        }
        return sum;
    };
});
app.filter('multiGroupBy', ['$parse', function ($parse) {
    return function (list, group_by) {
        var filtered = [];
        var prev_item = null;
        var group_changed = false;
        var new_field = 'group_by_CHANGED';
        angular.forEach(list, function (item) {
            group_changed = false;
            if (prev_item !== null) {
                group_by = angular.isArray(group_by) ? group_by : [group_by];
                //check each group by parameter
                for (var i = 0, len = group_by.length; i < len; i++) {
                    if ($parse(group_by[i])(prev_item) !== $parse(group_by[i])(item)) {
                        group_changed = true;
                    }
                }
            } // otherwise we have the first item in the list which is new
            else {
                group_changed = true;
            }
            if (group_changed) {
                item[new_field] = true;
            }
            else {
                item[new_field] = false;
            }
            filtered.push(item);
            prev_item = item;
        });
        return filtered;
    };
}]);
app.filter('totalAmount', function () {
    var totalVal;
    return function (listOfProducts) {
        //  Calculate the total value of a particular Order
        var total = 0;
        angular.forEach(listOfProducts, function (product) {
            total = total * 1 + product.finalamount * 1;
            totalVal = total;
        });
        return total;
    }
});
app.service('shared',function(){
    var visitList= [];
    var patientInfo ={};

    return{
        getVisitList: function(){
            return visitList;
        },
        setVisitList: function(value){
            visitList=value;
        },
        getPatientInfo: function(){
            return patientInfo;
        },
        setPatientInfo: function(value){
            patientInfo=value;
        }
    };
});
app.service('shared',function(){
    var visitList= [];
    var patientInfo ={};
    
    return{
        getVisitList: function(){
            return visitList;
        },
        setVisitList: function(value){
        	visitList=value;
        },
        getPatientInfo: function(){
            return patientInfo;
        },
        setPatientInfo: function(value){
        	patientInfo=value;
        }
    };
});
function showSuccess(header,msg){
    bootbox.alert({
        header: header,
        message: msg,
        size: 'small'
    });
}
function sortOn(collection, name) {
    collection.sort(
        function (a, b) {
            if (a[name] <= b[name]) {
                return ( -1 );
            }
            return ( 1 );
        }
    );
}




app.directive('back', ['$window', function($window) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                $window.history.back();
                scope.$apply();
            });
        }
    };
}]);
