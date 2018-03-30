'use strict';

describe('myApp.BackendExampleView module', function () {
    var $httpBackend;
    var $scope;
    var contact;
    var $rootScope;
    var BackendExampleViewCtrl;

    contact = {
        firstName: 'jorge',
        lastName: 'perez'
    }

    beforeEach(module('myApp.BackendExampleView'));

    beforeEach(angular.mock.inject(function ($controller, $injector, $http) {
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'Contact/REST/contact/-1').respond(contact);
        BackendExampleViewCtrl = $controller('BackendExampleViewCtrl', {
            $scope: $injector.get('$rootScope'),
            $http: $http
        });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should ....', function() {
        //spec body
        $httpBackend.flush();
        expect(contact).toBeDefined();

    });
});