var app = angular.module("vmApp");

var addScheduleController = function($scope,Restangular,$state){
	var schedules = Restangular.all('api/schedules');
	$scope.schedule = {};
	$scope.addSchedule = function(){
		$scope.scheduleForm.$setSubmitted();
		if( $scope.scheduleForm.$valid ){
			// interact with service and save data
			schedules.post($scope.schedule).then(function() {
				$state.go('home.listSchedule');
			}, function() {
			});
		}
	}
	$scope.clearSchedule = function(){
		$scope.scheduleForm.$setPristine();
		$scope.schedule = {}
	}


	$scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };

  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
}
app.controller('addScheduleController',['$scope','Restangular','$state',addScheduleController]);

var listScheduleController = function($scope,Restangular){
  var schedules = Restangular.all('api/schedules');
  schedules.getList().then(function(schedulesList){
    $scope.schedules = schedulesList;
  });
}
app.controller('listScheduleController',['$scope','Restangular',listScheduleController]);

var loginController = function($scope,Restangular,$state){
  var users = Restangular.post('api/users');
  $scope.user = { username: '', password: '' };
  $scope.logIn = function(){
    users.post( $scope.user ).then(function(result){
      if( result == "success" ){
        $state.go('home');  
      }
    });
  }
}
app.controller('loginController',['$scope','Restangular','$state',loginController]);

var searchController = function($scope){}	
app.controller('searchController',['$scope','Restangular',searchController]);

var navController = function($scope){}	
app.controller('navController',['$scope','Restangular',navController]);

