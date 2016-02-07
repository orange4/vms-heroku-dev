var app = angular.module("vmApp");

addScheduleController = function($scope){
	$scope.schedule = {};
	$scope.addSchedule = function(){
		$scope.scheduleForm.$setSubmitted();
		if( $scope.scheduleForm.$valid ){
			// interact with service and save data
		}
	}
	$scope.cancelSchedule = function(){
		$scope.scheduleForm.$setPristine();
		$scope.schedule = {}
	}
}
app.controller('addScheduleController',['$scope',addScheduleController]);

listScheduleController = function($scope){}
app.controller('listScheduleController',['$scope',listScheduleController]);

loginController = function($scope){}
app.controller('listScheduleController',['$scope',loginController]);

searchController = function($scope){}	
app.controller('listScheduleController',['$scope',searchController]);

navController = function($scope){}	
app.controller('listScheduleController',['$scope',navController]);

