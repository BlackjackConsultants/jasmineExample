'use strict';

describe('myApp.BackendExampleView module', function () {
    var $httpBackend;
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
        $http.get('Contact/REST/contact/-1').then(function (response) {
            //authToken = response.headers('A-Token');
            $scope.user = response.data;
        }).catch(function () {
            $scope.status = 'Failed...';
        });
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