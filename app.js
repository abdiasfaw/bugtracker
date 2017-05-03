'use strict';

//OPTIMIZE(Abdi Asfaw): Initialiazation of the angular app and import all the nesessary libs.
var app = angular.module('bugTracker', [
	'ngRoute'
	
]);


//ISSUE(Abdi Asfaw): Implement angular factory below
 /*
 app.factory('Login', ['$resource',
 	function ($resource){
	 	return $resource("http://localhost/bugtracker/api/",{},{
		 	login: {method: 'POST', cache: false, isArray: false};
	 	});
 	}
 ]);

*/

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
/* 
app.controller('loginController',['$scope','$location','Login','setCreds',
	function loginController($scope, $location, Login, setCreds){
		$scope.submit = function (){
			$scope.sub = true;
			
			var postData = {
				//FIXME(Abdi Asfaw): Finish this controller from section 'Adding a login Controller' in the angular book.
			}
		}
	}
]);

*/

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
		}).when('/dash', {
			title: 'Dashboard',
			templateurl:'templates/dashboard.html',
			controller: 'dashboardController'
		}).when('/about', {
			title: 'About Us',
			templateUrl: 'templates/about.html',
			controller: 'aboutController'
		}).otherwise({
			redirectTo:'/'
		});
		
		$locationProvider.html5Mode(false).hashPrefix('!');
	}
]);


//ISSUE(Abdi Asfaw): Setup teh app.run class here
