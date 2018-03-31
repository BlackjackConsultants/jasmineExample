'use strict';

angular.module('myApp.spyOnView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/spyOnView', {
        templateUrl: 'viewSpyOn/spyOnView.html',
        controller: 'spyOnViewCtrl'
  });
}])

.controller('spyOnViewCtrl', [function () {
    console.debug('spyOnViewCtrl code executed.');
}]);