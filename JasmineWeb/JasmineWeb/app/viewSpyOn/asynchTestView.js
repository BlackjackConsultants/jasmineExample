'use strict';

angular.module('myApp.asynchTestView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/asynchTestView', {
        templateUrl: 'viewSpyOn/asynchTestView.html',
        controller: 'asynchTestViewCtrl'
  });
}])

.controller('asynchTestViewCtrl', ['$scope', function ($scope) {
    console.debug('asynchTestViewCtrl code executed.');
    $scope.calculateTotalWithTip = function(price) {
        return price * 1.15;
    }
    $scope.calculateTotalWithTip($scope.mealPrice);
}]);