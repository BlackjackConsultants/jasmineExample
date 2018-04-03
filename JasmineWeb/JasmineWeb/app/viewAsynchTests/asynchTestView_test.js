'use strict';

describe('myApp.asynchTestView module', function () {
    var value;

    beforeEach(module('myApp.asynchTestView'));

    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 1);
    });

    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });
});