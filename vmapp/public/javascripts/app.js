var app = angular.module("vmApp",['ui.router','ui.bootstrap','restangular']);
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home.addSchedule');
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.jade"
    })
    .state('home.addSchedule', {
      url: "/addSchedule",
      templateUrl: "partials/addSchedule.jade"
    })
    .state('home.listSchedule', {
      url: "/listSchedule",
      templateUrl: "partials/listSchedule.jade"      
    });
});
