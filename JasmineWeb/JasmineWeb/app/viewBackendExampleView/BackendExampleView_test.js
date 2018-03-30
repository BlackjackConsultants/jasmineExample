'use strict';

describe('myApp.BackendExampleView module', function () {
    var $scope;
    var $httpBackend;
    var contact;
    var BackendExampleViewCtrl;

    contact = {
        firstName: 'jorge',
        lastName: 'perez'
    }

    beforeEach(module('myApp.BackendExampleView'));

    beforeEach(angular.mock.inject(function ($controller, $injector) {
        BackendExampleViewCtrl = $controller('BackendExampleViewCtrl', {
            $scope: $scope
        });
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'Contact/REST/contact/-1').respond(contact);
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