'use strict';

describe('Directive: ScrollToFixed', function () {

  // load the directive's module
  beforeEach(module('scrollToFixed'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-scroll-to-fixed></-scroll-to-fixed>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ScrollToFixed directive');
  }));
});
