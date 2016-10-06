'use strict';

// Declare app level module which depends on views, and components
angular.module('testApp', [
   'ngRoute',
   'ngResource',
   'ngSanitize',
   'ngAnimate',
   'doowb.angular-pusher'
]).
config(['$routeProvider','$locationProvider','$resourceProvider', '$httpProvider', 'PusherServiceProvider',function($routeProvider, $locationProvider, $resourceProvider, $httpProvider, PusherServiceProvider) {
	PusherServiceProvider
    .setToken('8df5d579b734841c2a40')
    .setOptions({cluster: 'ap1'});
}])

//initialise any app specific components in the run method below
.run(function($rootScope){	
	
});


angular.module('testApp')
.controller('testController', function($scope, $rootScope, $filter, $http, Pusher) {
	// initialize a list of items on the scope
	  $scope.items = [];
	  $scope.pusherItem = [];
	  
	  Pusher.subscribe('en-au-4', 'notification', function (item) {
		console.info('item',item);
		$scope.pusherItem.push(item);
	  });

	  var retrieveItems = function () {
	  // get a list of items from the api located at '/api/items'
	  $http.get('/api/items')
		.success(function (items) {
		  $scope.items = items;
		});
	  };

	  $scope.updateItem = function (item) {
		$http.post('/api/items', {id:1, name:'Kiwi'})
		.success(function (data) {
		  $scope.apiCallItem = data;
		});;
	  };

	  // load the items
	  retrieveItems();
});

