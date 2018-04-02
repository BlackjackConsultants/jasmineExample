'use strict';

describe('myApp.asynchTestView module', function () {
    var $httpBackend;
    var $rootScope;
    var $scope;
    var contact;
    var $rootScope;
    var ctrl;
    var value;

    beforeEach(module('myApp.asynchTestView'));

    beforeEach(angular.mock.inject(function ($controller, $injector) {
        // init varaibles.
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        $scope.mealPrice = 100;
        // controller is created.
        setTimeout(function (done) {
            ctrl = $controller('asynchTestViewCtrl', {
                $scope: $scope
            });
            value = 0;
            done();
        }, 1);

        // set spy before method called
        spyOn($scope, 'calculateTotalWithTip'); //.and.CallThrough;

        ////// method is called.
        ////$scope.calculateTotalWithTip($scope.mealPrice);
    }));

    it('should execute controller code using async timeouts', (function(done) {
        //spec body
        value++;
        expect(ctrl).toBeDefined();
        expect($scope.calculateTotalWithTip).toHaveBeenCalled();
        expect($scope.calculateTotalWithTip).toHaveBeenCalledWith(100);
        done();
    }));

});