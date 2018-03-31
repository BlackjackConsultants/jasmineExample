'use strict';

angular.module('myApp.spyOnView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/spyOnView', {
        templateUrl: 'viewSpyOn/spyOnView.html',
        controller: 'spyOnViewCtrl'
  });
}])

.controller('spyOnViewCtrl', ['$scope', function ($scope) {
    console.debug('spyOnViewCtrl code executed.');
    $scope.calculateTotalWithTip = function(price) {
        return price * 1.15;
    }
    //$scope.calculateTotalWithTip($scope.mealPrice);
}]);