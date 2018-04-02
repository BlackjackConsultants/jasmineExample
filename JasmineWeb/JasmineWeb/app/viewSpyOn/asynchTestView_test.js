'use strict';

describe('myApp.asynchTestView module', function () {
    var $httpBackend;
    var $rootScope;
    var $scope;
    var contact;
    var $rootScope;
    var ctrl;

    beforeEach(module('myApp.asynchTestView'));

    beforeEach(angular.mock.inject(function ($controller, $injector) {
        // init varaibles.
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $scope.mealPrice = 100;
        // controller is created.
        ctrl = $controller('asynchTestViewCtrl', {
            $scope: $scope
        });
        // set spy before method called
        spyOn($scope, 'calculateTotalWithTip'); //.and.CallThrough;

        ////// method is called.
        ////$scope.calculateTotalWithTip($scope.mealPrice);
    }));

    it('should execute controller code using async timeouts', inject(function($controller) {
        //spec body
        expect(ctrl).toBeDefined();
        expect($scope.calculateTotalWithTip).toHaveBeenCalled();
        expect($scope.calculateTotalWithTip).toHaveBeenCalledWith(100);
    }));

});