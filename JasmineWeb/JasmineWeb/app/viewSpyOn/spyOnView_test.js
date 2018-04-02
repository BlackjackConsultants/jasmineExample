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
        // init varaibles.
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $scope.mealPrice = 100;
        // controller is created.
        ctrl = $controller('spyOnViewCtrl', {
            $scope: $scope
        });
        // set spy before method called
        spyOn($scope, 'calculateTotalWithTip'); //.and.CallThrough;

        // method is called.
        $scope.calculateTotalWithTip($scope.mealPrice);
    }));

    it('should ....', inject(function($controller) {
        //spec body
        expect(ctrl).toBeDefined();
        expect($scope.calculateTotalWithTip).toHaveBeenCalled();
        expect($scope.calculateTotalWithTip).toHaveBeenCalledWith(100);
    }));

});