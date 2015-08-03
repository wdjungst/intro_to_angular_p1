'use strict';

// Declare app level module which depends on views, and components
angular.module('productsApp', [
  'ngRoute',
  'productsApp.products'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/products'});
}]);
