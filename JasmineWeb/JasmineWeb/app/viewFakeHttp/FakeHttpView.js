'use strict';

angular.module('myApp.FakeHttpView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/FakeHttpView', {
      templateUrl: 'viewFakeHttp/FakeHttpView.html',
    controller: 'FakeHttpViewCtrl'
  });
}])

.controller('FakeHttpViewCtrl', ['$scope', '$http', function ($scope, $http) {
    console.debug('FakeHttpViewCtrl code executed.');
    $http.get('Contact/REST/contact/-1').then(function (response) {
        //authToken = response.headers('A-Token');
        $scope.user = response;
    }).catch(function () {
        $scope.status = 'Failed...';
    });
}]);