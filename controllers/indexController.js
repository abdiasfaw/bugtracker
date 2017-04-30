'use strict';

app.module('bugtracker.index', ['$scope',
	function indexController($scope){
		$scope.label = "BugTracker";
		$scope.menuItems = {
			overview: 'Overview',
			taskList: 'Task List',
			
		}
		
	}
]);