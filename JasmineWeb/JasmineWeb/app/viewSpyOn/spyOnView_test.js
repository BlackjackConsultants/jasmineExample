'use strict';

describe('myApp.spyOnView module', function () {
    var $httpBackend;
    var $rootScope;
    var $scope;
    var contact;
    var $rootScope;
    var ctrl;

    beforeEach(module('myApp.spyOnView'));

    beforeEach(angular.mock.inject(function ($controller, $injector) {
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $scope.mealPrice = 100;
        ctrl = $controller('spyOnViewCtrl', {
            $scope: $scope
        });
        spyOn($scope, 'calculateTotalWithTip'); //.and.CallThrough;
        $scope.calculateTotalWithTip($scope.mealPrice);
    }));

    it('should ....', inject(function($controller) {
        //spec body
        expect(ctrl).toBeDefined();
        expect($scope.calculateTotalWithTip).toHaveBeenCalled();
        expect($scope.calculateTotalWithTip).toHaveBeenCalledWith(100);
    }));

});