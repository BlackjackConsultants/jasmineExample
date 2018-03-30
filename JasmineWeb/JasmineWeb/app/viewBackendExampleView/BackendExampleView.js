'use strict';

angular.module('myApp.BackendExampleView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/BackendExampleView', {
    templateUrl: 'viewBackendExampleView/BackendExampleView.html',
    controller: 'BackendExampleViewCtrl'
  });
}])

.controller('BackendExampleViewCtrl', [function () {
    console.debug('BackendExampleViewCtrl code executed.');
    //$http.get('Contact/REST/contact/-1').then(function (response) {
    //    //authToken = response.headers('A-Token');
    //    $scope.user = response.data;
    //}).catch(function () {
    //    $scope.status = 'Failed...';
    //});

}]);