'use strict';

angular.module('productsApp.products', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/products', {
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl'
  });
}])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.products = [];

  $http.get('http://devpoint-ajax-example-server.herokuapp.com/api/v1/products')
    .success(function(data) { $scope.products = data.products; });

  $scope.addProduct = function() {
    $scope.products.push(
      {
       name: $scope.newProductName,
       base_price: $scope.newProductPrice,
       description: $scope.newProductDesc
      });
      $scope.newProductName = '';
      $scope.newProductPrice = '';
      $scope.newProductDesc = '';
  };
}]);
