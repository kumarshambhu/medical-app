(function() {

	var MedisoftFactory = function($http) {
		var factory = {};
		var groupList = [ {
			id : 'patientname',
			label : 'Patient Name'
		}, {
			id : 'dateofentry',
			label : 'Bill Date'
		}, {
			id : 'typename',
			label : 'Type'
		}, {
			id : 'subtypename',
			label : 'Sub Type'
		} ];
		
		factory.getGroupList = function() {
			return groupList;
		}
		var statusList = ['Active',  'In-Active' ];
		
		factory.getStatusList = function() {
			return statusList;
		}

        var titleList = ['Mr.',  'Mrs.','Ms.' ];

        factory.getTitleList = function() {
            return titleList;
        }
        
        var userTypeList = ['Admin',  'Staff' ];

        factory.getUserTypeList = function() {
            return userTypeList;
        }

		
		var sexList = ['Male','Female'];
		
		
		factory.getSexList = function() {
			return sexList;
		}
		
		var maritalStatus = ['Married', 'Single']
		factory.getMaritalStatus = function(){
			return maritalStatus;
		}
		
		var nationality = ['Indian','US'];
		factory.getNationality = function(){
			return nationality;
		}
		



        var searchList = [ {
            value : 'mrd',
            label : 'Mrd No.'
        }, {
            value : 'phone',
            label : 'Phone No.'
        } ];

        factory.getSearchList = function() {
            return searchList;
        }

		return factory;

	};
	angular.module("MyApp").factory("MedisoftFactory", MedisoftFactory);
}());