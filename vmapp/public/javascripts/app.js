var app = angular.module("vmApp",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
	$stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/login.jade"
    })
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.jade"
    })
    .state('home.addSchedule', {
      url: "/addSchedule",
      templateUrl: "partials/addSchedule.jade",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('home.listSchedule', {
      url: "/listSchedule",
      templateUrl: "partials/listSchedule.jade"
    })
});
