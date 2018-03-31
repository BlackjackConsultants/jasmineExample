'use strict';

describe('myApp.FakeHttpView module', function () {
    var $httpBackend;
    var $scope;
    var contact;
    var $rootScope;
    var FakeHttpViewCtrl;

    contact = {
        firstName: 'jorge',
        lastName: 'perez'
    }

    beforeEach(module('myApp.FakeHttpView'));

    beforeEach(angular.mock.inject(function ($controller, $injector, $http) {
        $rootScope = $injector.get('$rootScope');
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET', 'Contact/REST/contact/-1').respond(contact);
        FakeHttpViewCtrl = $controller('FakeHttpViewCtrl', {
            $scope: $injector.get('$rootScope'),
            $http: $http
        });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should load backend data correctly', function() {
        //spec body
        $httpBackend.flush();
        expect(contact).toBeDefined();
        expect(contact.firstName).toEqual('jorge');
        expect(contact.lastName).toEqual('perez');
    });
});