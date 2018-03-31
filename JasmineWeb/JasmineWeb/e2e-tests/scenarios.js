'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /FakeHttpView when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/FakeHttpView");
  });


  describe('FakeHttpView', function() {

    beforeEach(function() {
      browser.get('index.html#!/FakeHttpView');
    });


    it('should render FakeHttpView when user navigates to /FakeHttpView', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('spyOnView', function () {

    beforeEach(function() {
        browser.get('index.html#!/spyOnView');
    });


    it('should render spyOnView when user navigates to /spyOnView', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
