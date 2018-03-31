'use strict';

describe('myApp.spyOnView module', function () {

    beforeEach(module('myApp.spyOnView'));

  describe('spyOnView controller', function () {

    it('should ....', inject(function($controller) {
      //spec body
        var spyOnViewCtrl = $controller('spyOnViewCtrl');
        expect(spyOnViewCtrl).toBeDefined();
    }));

  });
});