'use strict';


// Declare app level module which depends on filters, and services
var frontDoor = {};
frontDoor.app = angular.module('frontdoor', ['ngRoute','firebase']).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyController'});
      $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyController'});
      $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
