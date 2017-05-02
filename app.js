'use strict';

//OPTIMIZE(Abdi Asfaw): Initialiazation of the angular app and import all the nesessary libs.
var app = angular.module('bugTracker', [
	'ngRoute'
	
]);


//ISSUE(Abdi Asfaw): Implement angular factory below




//ISSUE(Abdi Asfaw): Add and setup the events for the angular controllers
app.controller('homeController', ['$scope', 
	function homeController($scope){
		$scope.label = 'BugTracker';
		$scope.menuItems = {
			home: 'Home',
			about: 'About',
			settings:'Settings'
		};
}
]);



//TOFIX(Abdi Asfaw): Add the templates and controllers
app.config(['$routeProvider','$locationProvider',
	function ($routeProvider, $locationProvider){
		$routeProvider.
		when('/', {
			title: 'Home',
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		}).when('/login', {
			title: 'Login',
			templateUrl: 'templates/login.html',
			controller: 'loginController'
		}).when('/register',{
			title: 'Register',
			templateUrl: 'templates/signup.html',
			controller: 'signupController'
		}).when('/forgot-pass', {
			title: 'Forgot Password',
			templateUrl: 'templates/forgotPass.html',
			controller:'resetPassController'
		}).when('/dashboard', {
			title: 'Dashboard',
			templateurl:'templates/dashboard.html',
			controller: 'dashboardController'
		}).when('/about', {
			title: 'About Us',
			templateUrl: 'templates/about.html'
		}).otherwise({
			redirectTo:'/'
		});
		
		$locationProvider.html5Mode(false).hashPrefix('!');
	}
]);


//ISSUE(Abdi Asfaw): Setup teh app.run class here
